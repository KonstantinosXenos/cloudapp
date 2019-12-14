from django.urls import path
from . import views
from django.conf import settings
from django.urls import include, path  # For django versions from 2.0 and up

app_name = 'users'  # here for namespacing of urls.

urlpatterns = [

    path("login/", views.login_request, name="login"),

]

