from django.views.generic.edit import FormView
from .forms import FileFieldForm
from django.core.files.storage import default_storage
from django.urls import reverse_lazy
from django.shortcuts import render, redirect, get_object_or_404
from . import models,serializers
from django.core.serializers import serialize
import rest_framework
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required


class FileUploadView(rest_framework.views.APIView):
    parser_classes = (rest_framework.parsers.FileUploadParser, )

    def post(self, request):
        up_file = request.FILES['file']
        destination = open('/protected/' + up_file.name, 'wb+')
        for chunk in up_file.chunks():
            destination.write(chunk)
            destination.close()

        # ...
        # do some stuff with uploaded file
        # ...
        return Response(up_file.name, status.HTTP_201_CREATED)


class FileFieldView(FormView):
    form_class = FileFieldForm

    template_name = 'documentmanager/upload.html'  # Replace with your template.
    success_url = reverse_lazy('documentmanager:upload')  # Replace with your URL or reverse().

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)


        if form.is_valid():
            for filename, file in request.FILES.items():
                name = request.FILES[filename].name


            instance=form.save(commit=False)
            instance.original_filename = name
            instance.save()
            return self.form_valid(form)
        else:
            return self.form_invalid(form)


def explorer(request):

    serialized_obj = serialize('json', models.Folder.objects.all())

    return render(request, 'documentmanager/index.html', {"objects": serialized_obj})


def view_document(request):

    return render(request, 'documentmanager/view.html', {"file":models.File.objects.get(pk=17)})


class CommentViewSet(rest_framework.viewsets.ModelViewSet):
    queryset = models.Comment.objects.all().order_by("date")
    serializer_class = serializers.CommentSerializer

class ItemViewSet(rest_framework.viewsets.ModelViewSet):
    """
    Base ViewSet for all Files
    """
    serializer_class = serializers.FolderSerializer
    queryset = models.Folder.objects.all().order_by("modification_date")
    def perform_update(self, serializer):
        serializer.save(modification_user=self.request.user)

    def perform_create(self, serializer):
        print(23342,self.request.user)
        serializer.save(creator=self.request.user,modification_user=self.request.user)

class FileViewSet(ItemViewSet):
    queryset = models.File.objects.all().order_by("modification_date")
    serializer_class = serializers.FileSerializer


class FolderViewSet(ItemViewSet):

    serializer_class = serializers.FolderSerializerWithContents
    queryset = models.Folder.objects.all().order_by("modification_date")

class FileUploadViewSet(rest_framework.viewsets.ModelViewSet):

    """
    File Versions and File Upload
    """
    serializer_class = serializers.FileVersionSerializer
    queryset = models.FileVersion.objects.all().order_by("uploadtime")
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

    # def get_serializer_class(self):
    #     serializer_class = self.serializer_class
    #     if self.request.method == 'POST':
    #         serializer_class = serializers.FileUploadSerializer
    #     return serializer_class
    # def perform_create(self, serializer):
    #
    #     serializer.save(creator=self.request.user)
    # def list(self, request, *args, **kwargs):
    #     return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    # def create(self, request):
    #     # models.File()
    #
    #     version=models.FileVersion(fileuploaded=request.FILES['file'],original_filename=request.FILES['file'].name).save()
    #     file=models.File(current_version=version).save()
    #     return Response({"file_id":file.pk},status.HTTP_201_CREATED)







class GetFolderFullPath(generics.RetrieveAPIView):
    queryset = models.Folder.objects.all()
    serializer_class = serializers.FolderPathSerializer

# @login_required
# def serve_protected_document(request, file):
#     document = get_object_or_404(ProtectedDocument, file="protected/documents/" + file)
#
#     # Split the elements of the path
#     path, file_name = os.path.split(file)
#
#     response = HttpResponse()
#     response["Content-Disposition"] = "attachment; filename=" + file_name
#     # nginx uses this path to serve the file
#     response["X-Accel-Redirect"] = document.name # path to file
#     return response