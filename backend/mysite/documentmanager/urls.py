from django.urls import path
from . import views
from django.conf.urls import url, include

from rest_framework import routers, serializers, viewsets


app_name = 'documentmanager'  # here for namespacing of urls.

router = routers.DefaultRouter()
router.register(r'item', views.ItemViewSet, basename='item')
router.register(r'folders', views.FolderViewSet, basename='folder')
router.register(r'comments', views.CommentViewSet)
router.register(r'file', views.FileViewSet, basename='file')
router.register(r'fileupload', views.FileUploadViewSet, basename='upload')



urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),


]
