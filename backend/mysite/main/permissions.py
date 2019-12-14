from django.utils import timezone


def can_edit_assignment(instance,user):
    if instance.χειριστής==user:
        return True
    elif instance.createdby==user and (timezone.now()-instance.ημερομηνία_χρέωσης).total_seconds()<1800:
        return True
    return False