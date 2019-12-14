from django.contrib import admin
from django.db import models
from .models import Χρεώσεις_αιτήματα,Χρεώσεις_Χειριστών,Διοικητικά_Πρωτοδικεία,Documents_pk,Comments,Ranks,Profile

# Register your models here.





class ΧρεώσειςAdmin(admin.ModelAdmin):
    readonly_fields = ('id','ημερομηνία_χρέωσης')

admin.site.register(Ranks)
admin.site.register(Profile)
admin.site.register(Χρεώσεις_αιτήματα)
admin.site.register(Χρεώσεις_Χειριστών,ΧρεώσειςAdmin)
admin.site.register(Διοικητικά_Πρωτοδικεία)
admin.site.register(Documents_pk)
admin.site.register(Comments)