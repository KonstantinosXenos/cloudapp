from django.urls import path
from . import views
from django.conf import settings
from django.urls import include, path  # For django versions from 2.0 and up
from django.views.decorators.csrf import csrf_exempt
app_name = 'users'  # here for namespacing of urls.

urlpatterns = [

    path("login/", views.LoginView.as_view(), name="login"),
    path('getcsrftoken/', csrf_exempt(views.GetCsrfToken.as_view())),
    path('logout/', csrf_exempt(views.LogoutView.as_view())),

]

