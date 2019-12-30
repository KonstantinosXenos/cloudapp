from django.urls import path
from . import views,models
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from django.core.validators import FileExtensionValidator


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        fields = ["user","comment_body","date","item_fk"]

class FolderContentSerializer(serializers.Serializer):

    url = serializers.HyperlinkedIdentityField(view_name='documentmanager:folder-detail')


class FileContentSerializer(serializers.Serializer):
    url = serializers.HyperlinkedIdentityField(view_name='documentmanager:file-detail')

class FolderPathSerializer(serializers.Serializer):
    folders = serializers.SerializerMethodField()
    class Meta:
        fields = ["folders"]
    def get_folders(self, obj):

        current_model=obj

        folderlist=[]
        folderlist.append({"pk" : current_model.pk, "title" : current_model.title})
        while True:

            if not current_model.parent:
                break
            current_model=models.Folder.objects.get(pk=current_model.parent)
            folderlist.append({"pk" : current_model.pk, "title" : current_model.title})
        
        folderlist.reverse()
        return folderlist


class ItemSerializer(serializers.ModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    class Meta:
        model = models.Item
        fields = ["type","creator", "creation_date", "title","pk","modification_user","modification_date","comment","parent"]

    def update(self, instance, validated_data):
        """On successful update add modification user"""
        instance.modification_user=self.context['request'].user
        return super().update(instance, validated_data)


class FolderSerializer(ItemSerializer):
    type = serializers.ReadOnlyField(default='folder')
    url = serializers.HyperlinkedIdentityField(view_name='documentmanager:folder-detail')
    path = serializers.SerializerMethodField()
    comment = CommentSerializer(many=True, read_only=True)
    


    class Meta:
        model = models.Folder
        fields = ItemSerializer.Meta.fields + ["url","path"]

    def validate_parent(self, data):
        if self.instance and self.instance == data:

            raise serializers.ValidationError('Item cant have self as parent.')
        return data

    def get_path(self, obj):
        return FolderPathSerializer(obj).data

class FolderSerializerWithContents(FolderSerializer):
    contents = serializers.SerializerMethodField()
    class Meta:
        model = models.Folder
        fields = FolderSerializer.Meta.fields + ["contents"]

    def get_contents(self, obj):

        folders = FolderSerializer(models.Folder.objects.filter(parent=obj.pk).order_by("modification_date"), context=self.context,
                                            many=True).data


        files = FileSerializer(models.File.objects.filter(parent=obj.pk).order_by("modification_date"), context=self.context,
                                            many=True).data

        return folders+files

class FileVersionSerializer(serializers.ModelSerializer):
    folder= serializers.PrimaryKeyRelatedField(write_only=True, allow_null=True,read_only=False, queryset=models.Folder.objects.all())

    class Meta:
        model = models.FileVersion
        fields = "__all__"

    def create(self, validated_data):
        """
        On file upload, If an existing file to attach this file version is not specified create a new file object.
        """
        if not validated_data['file']:
            file_instance=models.File(parent=validated_data['folder'],title="fsf",
                           creator=self.context['request'].user,
                           modification_user=self.context['request'].user,
                           

                                         ).save()
            validated_data['file']=file_instance
        validated_data.pop('folder', None)
        instance=super().create(validated_data)
        file_instance.current_version=instance
        file_instance.save()
        return instance
        
class FileSerializer(ItemSerializer):
    type = serializers.ReadOnlyField(default='file')
    url = serializers.HyperlinkedIdentityField(view_name='documentmanager:file-detail')
    current_version=FileVersionSerializer(read_only=True)

    class Meta:
        model = models.File
        fields = ItemSerializer.Meta.fields + ["url","current_version"]



