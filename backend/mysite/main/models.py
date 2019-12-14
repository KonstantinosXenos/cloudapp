from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from .enums import ΤύποςΧρέωσης
from django.apps import apps
from . import enums
from operator import attrgetter
# Create your models here.

class ΧρεώσειςManager(models.Manager):
    def ενεργές_χρεώσεις(self,user=None):

        if user:
            return self.filter(χειριστής=user, ημερομηνία_ολοκλήρωσης__isnull=True)
        else:
            return self.filter(ημερομηνία_ολοκλήρωσης__isnull=True)
class Ranks(models.Model):
    rank_name=models.CharField(max_length=40, verbose_name="Βαθμός")
    rank_short=models.CharField(max_length=40, verbose_name="Συντομογραφία")
    rank_order=models.IntegerField( verbose_name="Βαθμίδα")

    def __str__(self):
        return self.rank_name
#
class Profile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE, unique=True)
    rank = models.ForeignKey(Ranks, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Χρεώσεις_Χειριστών(models.Model):
    χειριστής = models.ForeignKey(User, on_delete=models.CASCADE)
    ημερομηνία_χρέωσης = models.DateTimeField("Ημερομηνία Χρέωσης", auto_now_add=True)
    ημερομηνία_ολοκλήρωσης = models.DateTimeField("Ημερομηνία Ολοκλήρωσης",null=True, blank=True)
    τύπος_χρέωσης = models.CharField(max_length=255, choices=[(tag.name, tag.value[0]) for tag in ΤύποςΧρέωσης])
    document_pk=models.IntegerField( verbose_name="ID εισερχόμενου εγγράφου", blank=True, null=True, help_text="Αφορά τον αριθμό καταχώρησης στο ψηφιακό αρχείο μας.")
    σχόλια=models.CharField(max_length=450, blank=True, verbose_name="Σχόλια")
    createdby =  models.ForeignKey(User, on_delete=models.CASCADE, related_name='createdby')
    objects = ΧρεώσειςManager()
    class Meta:
        #Otherwise we get "Tutorial Serie*ss* in admin"
        verbose_name_plural = "Χρεώσεις_Χειριστών"

    @property
    def assignment_type_object(self):

        return apps.get_model("documentmanager", (attrgetter(self.τύπος_χρέωσης)(enums.ΤύποςΧρέωσης)).value[1]).objects.get(χρεώσεις=self)

    def __str__(self):
        return str(self.id) + " | " + self.χειριστής.username + " " + "από " + str(self.ημερομηνία_χρέωσης.date())

class Comments(models.Model):
    χρεώσεις = models.ForeignKey(Χρεώσεις_Χειριστών, related_name='comments', on_delete=models.CASCADE)
    χειριστής = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField("Ημερομηνία", auto_now_add=True)
    comment = models.TextField(max_length=1450, verbose_name="Σχόλιο")
    def __str__(self):
        return self.comment


class Documents_pk(models.Model):
    document_fk=models.OneToOneField(Χρεώσεις_Χειριστών, on_delete=models.CASCADE, related_name='documents', primary_key= True)

    apanthsh_pk=models.IntegerField( verbose_name="ID απάντησης στο ψηφιακό μας αρχείο", blank=True, null=True, help_text="Αφορά τον αριθμό καταχώρησης στο ψηφιακό αρχείο μας.")

class Χρεώσεις_αιτήματα(models.Model):
    χρεώσεις=models.OneToOneField(Χρεώσεις_Χειριστών, related_name='αίτημα', on_delete=models.CASCADE, primary_key= True)

    επώνυμο=models.CharField(max_length=200, verbose_name="Επώνυμο", blank=True)
    όνομα=models.CharField(max_length=200, verbose_name="Όνομα", blank=True)
    ημερομηνία_γέννησης=models.DateField(null=True, blank=True, verbose_name="Ημερομηνία Γέννησης")
    αριθμός_πρωτοκόλλου=models.CharField(max_length=200, blank=True , verbose_name="Αριθμός Πρωτοκόλλου")
    ημερομηνία_πρωτοκόλλου=models.DateField( verbose_name="Ημερομηνία Πρωτοκόλλου", null=True, blank=True)
    δκα=models.CharField(max_length=200, blank=True , verbose_name="ΔΚΑ")
    απάντηση_που_δώσαμε=models.CharField(max_length=600, blank=True , verbose_name="Απάντηση που δώσαμε")
    πρωτόκολλο_απάντησης=models.CharField(max_length=200, blank=True, verbose_name="Πρωτόκολλο απάντησης")
    στοιχεία_παραλήπτη=models.CharField(max_length=500, blank=True, verbose_name="Στοιχεία Παραλήπτη")
    email = models.CharField(max_length=500, blank=True, verbose_name="Email Αποστολή Αποφάσεων")


    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Αιτήματα"
    def __str__(self):
        str=""
        if self.επώνυμο:
            str += f"(επ) {self.επώνυμο}"
        if self.όνομα:
            str += f" (ον) {self.όνομα}"
        if self.ημερομηνία_γέννησης:
            str += f" γεν. {self.ημερομηνία_γέννησης}"
        if self.δκα:
            str += f" | ΔΚΑ: {self.δκα}"
        return str

class Διοικητικά_Πρωτοδικεία(models.Model):
    χρεώσεις=models.OneToOneField(Χρεώσεις_Χειριστών, related_name='πρωτοδικείο', on_delete=models.CASCADE, primary_key= True)
    πρωτοδικείο=models.CharField(max_length=500, verbose_name="Διοικητικό Πρωτοδικείο", blank=True)
    αριθμός_πρωτοκόλλου=models.CharField(max_length=500, blank=True , verbose_name="Αριθμός Πρωτοκόλλου")
    εσωτερικό_πρωτ=models.CharField(max_length=500, blank=True , verbose_name="Εσωτερικό Πρωτόκολλο")
    επώνυμο=models.CharField(max_length=500, verbose_name="Επώνυμο", blank=True)
    όνομα=models.CharField(max_length=500, verbose_name="Όνομα", blank=True)
    ημερομηνία_γέννησης=models.DateField(null=True, blank=True, verbose_name="Ημερομηνία Γέννησης")
    δκα = models.CharField(max_length=500, blank=True, verbose_name="ΔΚΑ")
    ενέργειες=models.TextField(max_length=2000, verbose_name="Ενέργειες", blank=True)
    πρωτόκολλο_απάντησης = models.CharField(max_length=500, blank=True, verbose_name="Πρωτόκολλο απάντησης")

    def __str__(self):
        str=""
        if self.επώνυμο:
            str += f"(επ) {self.επώνυμο}"
        if self.όνομα:
            str += f" (ον) {self.όνομα}"
        if self.ημερομηνία_γέννησης:
            str += f" γεν. {self.ημερομηνία_γέννησης}"

        return str

class Λοιπή_Αλληλογραφία(models.Model):
    χρεώσεις=models.OneToOneField(Χρεώσεις_Χειριστών, related_name='λοιπη_αλληλογραφία', on_delete=models.CASCADE, primary_key= True)
    αποστολέας=models.CharField(max_length=500, verbose_name="Αποστολέας", blank=True)
    αριθμός_πρωτοκόλλου = models.CharField(max_length=500, blank=True, verbose_name="Αριθμός Πρωτοκόλλου")
    ημερομηνία_εγγράφου=models.DateField( verbose_name="Ημερομηνία Εγγράφου", null=True, blank=True)
    αριθμός_πρωτοκόλλου_εισερχόμενης_αλληλογραφίας=models.CharField(max_length=500, blank=True, verbose_name="Αριθμός Πρωτοκόλλου Εισερχόμενης Αλληλογραφίας")
    ημερομηνία_πρωτοκόλλου_εισερχόμενης_αλληλογραφίας=models.DateField( verbose_name="Ημερομηνία Πρωτοκόλλου Εισερχόμενης Αλληλογραφίας", null=True, blank=True)
    πρωτόκολλο_απάντησης = models.CharField(max_length=200, blank=True, verbose_name="Πρωτόκολλο απάντησης")
    ενέργειες=models.TextField(max_length=2000, verbose_name="Ενέργειες", blank=True)
    εμπλεκόμενα_άτομα=models.TextField(max_length=2500, verbose_name="Εμπλεκόμενα άτομα", blank=True)

class Στρατολογικά(models.Model):
    χρεώσεις=models.OneToOneField(Χρεώσεις_Χειριστών, related_name='στρατολογικά', on_delete=models.CASCADE, primary_key= True)
    αποστολέας=models.CharField(max_length=500, verbose_name="Αποστολέας", blank=True)
    αριθμός_πρωτοκόλλου = models.CharField(max_length=500, blank=True, verbose_name="Αριθμός Πρωτοκόλλου")
    αριθμός_πρωτοκόλλου_εισερχόμενης_αλληλογραφίας=models.CharField(max_length=500, blank=True, verbose_name="Αριθμός Πρωτοκόλλου Εισερχόμενης Αλληλογραφίας")
    ημερομηνία_παράδοσης_στην_πληροφορική=models.CharField(max_length=500, blank=True, verbose_name="Ημερομηνία παράδοσης στην πληροφορική")
