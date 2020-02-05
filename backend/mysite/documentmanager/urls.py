from django.urls import path,re_path
from . import views
from django.conf.urls import url, include
from users.views import UserViewSet
from rest_framework import routers, serializers, viewsets


app_name = 'documentmanager'  # here for namespacing of urls.

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet, basename='item')
router.register(r'folders', views.FolderViewSet, basename='folder')
router.register(r'comments', views.CommentViewSet)
router.register(r'file', views.FileViewSet, basename='file')
router.register(r'user', UserViewSet, basename='user')



urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^media/protected/(?P<file>.+)', views.serve_protected , name='serve_protected')
]
