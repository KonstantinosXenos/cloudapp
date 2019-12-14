from django import forms
from django.db import models
from django.contrib import admin
from .models import MetadataType
class Foo(models.Model):
    pass

class Bar(models.Model):
    foo = models.ForeignKey(Foo, on_delete=models.CASCADE)
    name = models.CharField(
        max_length=48,

        unique=True, verbose_name='Name'
    )
class FooForm(forms.ModelForm):
    class Meta:
        model = Foo
        exclude=[]
    bars = forms.ModelMultipleChoiceField(queryset=Bar.objects.all())

    def __init__(self, *args, **kwargs):
        super(FooForm, self).__init__(*args, **kwargs)
        if self.instance:
            self.fields['bars'].initial = self.instance.bar_set.all()

    def save(self, *args, **kwargs):
        # FIXME: 'commit' argument is not handled
        # TODO: Wrap reassignments into transaction
        # NOTE: Previously assigned Foos are silently reset
        instance = super(FooForm, self).save(commit=False)
        self.fields['bars'].initial.update(foo=None)
        self.cleaned_data['bars'].update(foo=instance)
        return instance

class FooAdmin(admin.ModelAdmin):
    form = FooForm

admin.site.register(Foo,FooAdmin)
admin.site.register(Bar)