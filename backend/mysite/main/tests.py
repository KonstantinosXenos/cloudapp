from django.test import TestCase
from . import search
from django.apps import apps
from django.contrib.auth.models import User
from . import models
# Create your tests here.


class SearchTest(TestCase):
    def createusers(self):
        self.user = User.objects.create_user(username='testuser', last_name='lastname',password='12345')
        self.user.save()
        xrewsh=models.Χρεώσεις_Χειριστών(χειριστής=self.user,τύπος_χρέωσης='ΑΙΤΗΜΑ',createdby=self.user)
        xrewsh.save()
        aithma=models.Χρεώσεις_αιτήματα(χρεώσεις=xrewsh, επώνυμο='testname')
        aithma.save()
        comment=models.Comments(χρεώσεις=xrewsh, χειριστής=self.user,comment='testcomment1')
        comment.save()
        self.user = User.objects.create_user(username='testuser2', last_name='lastname2',password='12345')
        self.user.save()
        xrewsh=models.Χρεώσεις_Χειριστών(χειριστής=self.user,τύπος_χρέωσης='ΑΙΤΗΜΑ',createdby=self.user)
        xrewsh.save()
        aithma=models.Χρεώσεις_αιτήματα(χρεώσεις=xrewsh, επώνυμο='testname2')
        aithma.save()
        comment=models.Comments(χρεώσεις=xrewsh, χειριστής=self.user,comment='testcomment2')
        comment.save()
    def new_assignment(self):
        model=apps.get_model(app_label='documentmanager', model_name="Χρεώσεις_Χειριστών")
        model(χειριστής=self.user,τύπος_χρέωσης="AITHMA", createdby=self.user)

    def test_search(self):

        self.createusers()
        #search by username
        queryset=search.search_by_username('testuser')
        self.assertTrue(len(queryset) == 1)

        #generic search
        queryset = search.simple_search('testname2')
        self.assertTrue(len(queryset) == 1)
        queryset = search.simple_search('lastname2')
        self.assertTrue(len(queryset) == 1)
        queryset = search.simple_search('1')
        self.assertTrue(len(queryset) == 1)
        queryset = search.simple_search('testcomment2')
        self.assertTrue(len(queryset) == 1)