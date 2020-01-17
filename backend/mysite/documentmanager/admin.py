from django.contrib import admin
from . import models
# Register your models here.


admin.site.register(models.Item)
admin.site.register(models.File)
admin.site.register(models.FileVersion)
admin.site.register(models.Folder)
admin.site.register(models.Comment)