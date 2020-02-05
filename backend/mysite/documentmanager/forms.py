from django import forms
from . import models
class FileFieldForm(forms.ModelForm):
    class Meta:
        model = models.File
        fields="__all__"
