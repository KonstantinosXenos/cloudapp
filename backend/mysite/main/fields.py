from django import forms
from django.db import models
class UserModelChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        try:
            return obj.profile.rank.rank_short + " " + obj.last_name + " " +obj.first_name
        except:
            return obj.last_name + " " + obj.first_name
