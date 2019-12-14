from django import forms
from django.contrib.auth.forms import UserCreationForm
from . import models
from django.contrib.auth.models import User
from django.forms import ModelForm
from .models import Χρεώσεις_Χειριστών,Χρεώσεις_αιτήματα, Documents_pk
from . import models
from .fields import UserModelChoiceField


class NewUserForm(UserCreationForm):
    username = forms.CharField(label='Μητρώο')
    password1= forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("username", "last_name", "first_name", "password1", "password2")

    def save(self, commit=True):
        user = super(NewUserForm, self).save(commit=False)

        if commit:
            user.save()
        return user



class Προσθήκη_Χρέωσης(ModelForm):

    χειριστής=UserModelChoiceField(queryset=User.objects.filter(is_staff=False).order_by('profile__rank__rank_order', '-username'))
    class Meta:
        model = Χρεώσεις_Χειριστών
        fields = ['χειριστής','τύπος_χρέωσης']

class Χρεώσεις_αιτήματα(ModelForm):
    στοιχεία_παραλήπτη = forms.CharField(widget=forms.Textarea,required=False)
    class Meta:
        model = Χρεώσεις_αιτήματα
        exclude = ['χρεώσεις']

class Διοικητικά_Πρωτοδικεία(ModelForm):

    class Meta:
        model = models.Διοικητικά_Πρωτοδικεία
        exclude = ['χρεώσεις']

class Λοιπή_Αλληλογραφία(ModelForm):

    class Meta:
        model = models.Λοιπή_Αλληλογραφία
        exclude = ['χρεώσεις']

class Στρατολογικά(ModelForm):

    class Meta:
        model = models.Στρατολογικά
        exclude = ['χρεώσεις']

class AddComment(ModelForm):

    class Meta:
        model = models.Comments
        fields = ['comment']