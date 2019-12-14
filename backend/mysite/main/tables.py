from collections import OrderedDict
from operator import attrgetter
from .models import Χρεώσεις_Χειριστών, User, Χρεώσεις_αιτήματα
from .enums import ΤύποςΧρέωσης
def get_querylist(model,needed_columns):
    needed_columns=["χειριστής","αίτημα.επώνυμο"]
    querylist=[]
    for instance in model:
        od = OrderedDict()
        for column in needed_columns:
            od[column]=attrgetter(column)(instance)
        querylist.append(od)

    return querylist


