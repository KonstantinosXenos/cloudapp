from django.urls import path
from . import views
from django.conf import settings
from django.urls import include, path  # For django versions from 2.0 and up

app_name = 'main'  # here for namespacing of urls.

urlpatterns = [
    path("", views.χρεώσεις, name="assignments"),
    path("register/", views.register, name="register"),
    path("login/", views.login_request, name="login"),
    path("logout/", views.logout_request, name="logout"),
    path("assignments/add/", views.Νέα_Χρέωση.as_view(), name="new_xrewsh"),
    path('assignments/addcomment/<int:id>/', views.addcomment, name='addcomment'),
    path("assignments/", views.χρεώσεις, name="assignments"),
    path('assignments/edit/<int:id>/', views.επεξεργασία_χρέωσης, name="edit_assignment"),
   # path('assignments/user/<int:userid>/', views.userassignments, name="userassignments"),
    path('assignments/totalcount/', views.totalcount, name="totalcount"),
    path('assignments/complete/<int:id>/', views.ολοκλήρωση_χρέωσης, name="complete_assignment"),
    path('password/', views.change_password, name='change_password'),
    path('test/', views.test, name='test')
]

