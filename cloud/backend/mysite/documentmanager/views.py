from django.views.generic.edit import FormView
from .forms import FileFieldForm
from django.core.files.storage import default_storage
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from . import models, serializers
from django.core.serializers import serialize
import rest_framework
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import action



class CommentViewSet(rest_framework.viewsets.ModelViewSet):
    queryset = models.Comment.objects.all().order_by("date")
    serializer_class = serializers.CommentSerializer


class ItemViewSet(rest_framework.viewsets.ModelViewSet):
    """
    Base ViewSet for all Files
    """
    serializer_class = serializers.ItemSerializer
    queryset = models.Item.objects.all().order_by("modification_date")

    def perform_update(self, serializer):
        serializer.save(modification_user=self.request.user)

    def perform_create(self, serializer):

        return serializer.save(creator=self.request.user)
    # def get_serializer_context(self):
    #     return {'request': None}
    @action(methods=['patch'], detail=False)
    def move(self, request):

        serializer = self.get_serializer(
            self.queryset, data=request.data, many=True, partial=True)
        if serializer.is_valid():

            instances = self.perform_create(serializer)

            pk_list = [instance.pk for instance in instances]

            # subclass the item and return the subclassed serializer
            subclassed_data = [item.get_serializer()(item, context={
                'request': request}).data for item in models.Item.objects.filter(pk__in=pk_list).select_subclasses()]
            return Response(subclassed_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['delete'], detail=False)
    def delete(self, request):
        self.queryset.filter(pk__in=[d['pk'] for d in request.data]).delete()
        return Response(request.data)


class FileViewSet(ItemViewSet):
    queryset = models.File.objects.all().order_by("modification_date")
    serializer_class = serializers.FileSerializer

    @action(methods=['post'], detail=False)
    def upload(self, request):
        serializer = serializers.FileVersionSerializer(
            context={'request': request}, data=request.data)
        if serializer.is_valid():

            instance = self.perform_create(serializer)

            return Response(self.get_serializer(self.queryset.get(pk=instance.file)).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FolderViewSet(ItemViewSet):

    serializer_class = serializers.FolderSerializerWithContents
    queryset = models.Folder.objects.all().order_by("modification_date")


class GetFolderFullPath(generics.RetrieveAPIView):
    queryset = models.Folder.objects.all()
    serializer_class = serializers.FolderPathSerializer


@login_required
def serve_protected(request, file):
    # document = get_object_or_404(
    #     ProtectedDocument, file="protected/documents/" + file)

    # Split the elements of the path
    # path, file_name = os.path.split(file)
    
    response = HttpResponse(content_type='application/pdf')
    response["Content-Disposition"] = "inline; filename=" + 'file_name.pdf'
    # nginx uses this path to serve the file
    response["X-Accel-Redirect"] = '/protected/' + file  # path to file
    return response
