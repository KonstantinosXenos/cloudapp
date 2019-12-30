from django.db import models
import uuid
from django.utils import timezone
from django.core.validators import FileExtensionValidator
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
# Create your models here.
def generate_filename(instance, filename):
    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    import os
    filename, file_extension = os.path.splitext(filename)
    return f'protected/{timezone.now().year}/{uuid.uuid4()}{file_extension}'


class Item(models.Model):
    parent=models.ForeignKey("Folder", related_name='folder_parent', blank=True, null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, verbose_name="title")
    creator = models.ForeignKey(User, related_name='creator',on_delete=models.PROTECT, editable=False)
    creation_date=models.DateTimeField("Created", auto_now_add=True)
    modification_user= models.ForeignKey(User,related_name='modification_user', on_delete=models.PROTECT, editable=False)
    modification_date= models.DateTimeField("Modified", editable=False,blank=True, null=True, default=timezone.now)
    icon = models.FilePathField(editable=False,blank=True, null=True)

    def clean(self):
        if self.parent == self:
            raise ValidationError('Item cant have self as parent.')

    def save(self, *args, **kwargs):
        self.modification_date=timezone.now()
        if self.parent:
            self.parent.modification_date=timezone.now()
            self.parent.save()
        super().save(*args, **kwargs)
        return self

class File(Item):
    current_version=models.ForeignKey("FileVersion",  related_name='current_version', on_delete=models.CASCADE ,blank=True, null=True)


class FileVersion(models.Model):
    fileuploaded = models.FileField(upload_to=generate_filename, unique=True,
                            validators=[FileExtensionValidator(allowed_extensions=['pdf'])])
    original_filename = models.CharField(max_length=200, verbose_name="Filename")
    uploadtime=models.DateTimeField("Uploaded", auto_now_add=True)
    file= models.ForeignKey(File,  related_name='main_file', on_delete=models.CASCADE ,blank=True, null=True)
    creator = models.ForeignKey(User, related_name='FileVersion_creator',on_delete=models.PROTECT, editable=False)
    # def save(self, *args, **kwargs):
    #   if self.pk is None and hasattr(self,'link') is False:
    #     self.link = Link()
    #     self.link.save()
    #   super(Lead, self).save(*args, **kwargs)



class Folder(Item):
    pass

class Comment(models.Model):
    item_fk = models.ForeignKey(Item, related_name='comment', blank=True, null=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField("Date added", auto_now_add=True)
    comment_body = models.TextField(max_length=1450, verbose_name="Comment")

    def __str__(self):
        return self.comment_body

