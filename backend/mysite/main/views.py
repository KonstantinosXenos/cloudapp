from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm
from django.views.generic.edit import FormView , UpdateView
from .models import User, Χρεώσεις_αιτήματα,Χρεώσεις_Χειριστών,Documents_pk
from django.contrib.auth import logout, authenticate, login, update_session_auth_hash
from django.contrib import messages
from .forms import NewUserForm,Προσθήκη_Χρέωσης
from . import forms,models
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from . import enums
from operator import attrgetter
from django.apps import apps
from .search import simple_search
from django.utils import timezone
import datetime
from django.utils.timezone import make_aware
from django.db.models import Count
from django.contrib import messages
from .import permissions
from django.core.exceptions import PermissionDenied
from django.core.paginator import Paginator
from . import search
from django.utils.html import mark_safe
from folder_assignments import views as folder_assignments_views
@login_required(login_url='/login/')
def homepage(request):
    return render(request=request,
                  template_name='documentmanager/header_navbar.html')

def navigation(request):

    return render(request, 'documentmanager/includes/navigation.html',{"οιχρεώσειςμου":models.Χρεώσεις_Χειριστών.objects.ενεργές_χρεώσεις(request.user).count(),"σύνολο":models.Χρεώσεις_Χειριστών.objects.ενεργές_χρεώσεις().count()} )

@login_required
def χρεώσεις(request):
    if 'type' in request.GET:

        if request.GET["type"]=="assignments":
            if request.method == 'GET'  and any(arg in request.GET for arg in ['searchq','username']):
                try:
                    search_query=request.GET["searchq"]
                except:
                    search_query = ""
                try:
                    username = request.GET["username"]

                except:
                    username=None

                if username:
                    result=search.search_by_username(username)
                else:
                    result=simple_search( search_term=search_query)
                relevant_assignments=[]
                relevant_assignments+= Χρεώσεις_Χειριστών.objects.filter(pk__in=result, ημερομηνία_ολοκλήρωσης__isnull=True).order_by('ημερομηνία_χρέωσης')
                relevant_assignments += Χρεώσεις_Χειριστών.objects.filter(pk__in=result,ημερομηνία_ολοκλήρωσης__isnull=False).order_by('-ημερομηνία_ολοκλήρωσης')


                paginator = Paginator(relevant_assignments, 20)  # < 3 is the number of items on each page
                page = request.GET.get('page')

                cards=[]
                for ob in paginator.get_page(page).object_list:
                    cards.append(ob.assignment_type_object)


                return render(request, 'documentmanager/search_results.html', {'results': cards, 'paginator': paginator.get_page(page)})
        elif request.GET["type"]=="folder_assignments":
            response = redirect("folder_assignments:folders")
            import urllib.parse
            response['Location'] += f'?searchq={urllib.parse.quote_plus(request.GET["searchq"])}'

            return response
    else:

        navigation_html = [navigation(request),folder_assignments_views.navigation(request)]
        return render(request, 'documentmanager/assignments2.html',{'undersearch':navigation_html})



class Νέα_Χρέωση(LoginRequiredMixin, FormView):
    template_name = 'documentmanager/add_xrewsh_form.html'
    form_class = Προσθήκη_Χρέωσης

    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        self.object = form.save(commit=False)
        # Do any custom stuff here
        self.object.createdby= self.request.user
        self.object.save()

        model=apps.get_model(app_label='documentmanager', model_name=(attrgetter(self.object.τύπος_χρέωσης)(enums.ΤύποςΧρέωσης)).value[1])
        r = model(χρεώσεις=self.object)

        r.save()
        messages.info(self.request, f'Η υπ` αριθμ. {self.object.id} χρέωση καταχωρήθηκε.')
        return redirect("documentmanager:edit_assignment", id=self.object.id)
    def form_invalid(self, form):
        return HttpResponse("ΠΡΟΒΛΗΜΑ")

@login_required
def επεξεργασία_χρέωσης(request, id):
    instance = Χρεώσεις_Χειριστών.objects.get(id=id)
    if not permissions.can_edit_assignment(instance,request.user):
        raise PermissionDenied("You do not have permission to Enter Clients in Other Company, Be Careful")


    model_name=(attrgetter(instance.τύπος_χρέωσης)(enums.ΤύποςΧρέωσης)).value[1]
    model = apps.get_model(app_label='documentmanager',
                           model_name=model_name)
    form_class=attrgetter(model_name)(forms)
    form = form_class(request.POST or None, instance=get_object_or_404(model, χρεώσεις=id))
    if form.is_valid():
        form.save()

        messages.info(request, 'Επιτυχής επεξεργασία χρέωσης.')
        return redirect(request.POST.get('next'))
    return render(request, 'documentmanager/add_xrewsh_form.html', {'form': form,"next":request.META.get('HTTP_REFERER'), "assignment_id": id})




def register(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f"New account created: {username}")
            login(request, user)
            return redirect("documentmanager:homepage")

        else:
            for msg in form.error_messages:
                messages.error(request, f"{msg}: {form.error_messages[msg]}")

            return render(request = request,
                          template_name = "documentmanager/register.html",
                          context={"form":form})

    form = NewUserForm
    return render(request = request,
                  template_name = "documentmanager/register.html",
                  context={"form":form})

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
                    template_name = "documentmanager/login.html",
                    context={"form":form})

@login_required
def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("documentmanager:assignments")



def test(request):

    return render(request = request,
                    template_name = "documentmanager/test.html")


@login_required
def totalcount(request):
    xrewseis=Χρεώσεις_Χειριστών.objects.filter(ημερομηνία_ολοκλήρωσης=None)
    row={}
    χειριστές=xrewseis.order_by().values_list('χειριστής__username',flat=True).distinct()
    for χειριστής in χειριστές:
        χρεώσεις_χρήστη=xrewseis.filter(χειριστής__username=χειριστής)
        counted_values=χρεώσεις_χρήστη.values('τύπος_χρέωσης').order_by().annotate(Count('τύπος_χρέωσης'))
        _={}
        for d in counted_values:
            _[d['τύπος_χρέωσης']]=d['τύπος_χρέωσης__count']
            query=User.objects.get(username=χειριστής)
            name=query.last_name + " " + query.first_name
            if name is " ":
                name=χειριστής
        row[name]=_

    return render(request, 'documentmanager/total_assignments.html', {'rows': row})


@login_required
def ολοκλήρωση_χρέωσης(request,id):
    instance = Χρεώσεις_Χειριστών.objects.get(id=id)
    if not permissions.can_edit_assignment(instance,request.user):
        raise PermissionDenied("You do not have permission")

    if 'yes' in request.POST:
        query = Χρεώσεις_Χειριστών.objects.get(id=id)
        query.ημερομηνία_ολοκλήρωσης = timezone.now()
        query.save()
        messages.info(request, 'Επιτυχής ολοκλήρωση χρέωσης.')
        return redirect('documentmanager:assignments')
    elif 'no' in request.POST:
        return redirect('documentmanager:assignments')
    return render(request, 'documentmanager/complete.html', {'table': "eff"})

@login_required
def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(request, 'Η αλλαγή του κωδικού πραγματοποιήθηκε.')
            return redirect('documentmanager:assignments')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'documentmanager/change_password.html', {
        'form': form
    })

@login_required
def addcomment(request,id):



    if request.POST.get('SubmitComment') == 'Submit':
        form = forms.AddComment(request.POST)
        if form.is_valid():
            instance = models.Comments(χρεώσεις=Χρεώσεις_Χειριστών.objects.get(pk=id),χειριστής=request.user,**form.cleaned_data)

            instance.save()
            messages.info(request, 'Το σχόλιο προστέθηκε.')
            return redirect(request.POST.get('next'))
    form = forms.AddComment()
    return render(request, 'documentmanager/add_comment.html',{'form':form, "next":request.META.get('HTTP_REFERER')})