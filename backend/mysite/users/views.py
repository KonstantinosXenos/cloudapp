from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm
from django.contrib.auth import logout, authenticate, login, update_session_auth_hash
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.middleware.csrf import get_token
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from rest_framework import permissions,status
from .serializers import LoginSerializer
class GetCsrfToken(APIView):
    """
    Generate a csrf token to be used in login page.
    """
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        """
        Generate a csrf token to be used in login page.
        """
        
        return Response({'name':settings.CSRF_COOKIE_NAME, 'token':get_token(request),'duration':settings.CSRF_COOKIE_AGE})

class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response({'name':'sessionid','token':request.session.session_key},status=status.HTTP_202_ACCEPTED)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

# Create your views here.
def login_request(request):
    
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return redirect('/')
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request = request,
                    template_name = "users/login.html",
                    context={"form":form})