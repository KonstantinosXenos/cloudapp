from django.db.models import Q
from django.db.models import CharField
from . models import Χρεώσεις_Χειριστών,Comments
from . import models
from django.core.exceptions import FieldError
import traceback
from django.apps import apps
from . import enums




def simple_search(search_term):
    search_term=search_term.strip()
    models = [apps.get_model('documentmanager', _.value[1]) for _ in enums.ΤύποςΧρέωσης]
    result=set()

    for model in models:
        for field in model._meta.get_fields():
            try:
                filter_query={'%s__%s' % (field.name, 'icontains'): search_term}


                result.update(model.objects.values_list('χρεώσεις', flat=True).filter(**filter_query))
            except Exception as err:
                if not isinstance(err,FieldError):
                    traceback.print_exc()

    try:

        result.update(Comments.objects.values_list('χρεώσεις', flat=True).filter(comment__icontains=search_term))
        result.update(Χρεώσεις_Χειριστών.objects.values_list('id', flat=True).filter(pk=search_term))

    except Exception as err:
        pass
    result.update(Χρεώσεις_Χειριστών.objects.values_list('id', flat=True).filter(χειριστής__last_name__icontains=search_term))

    return result





def search_by_username(username):


    return Χρεώσεις_Χειριστών.objects.values_list('id', flat=True).filter(χειριστής__username=username)


# print(search('ggh'))