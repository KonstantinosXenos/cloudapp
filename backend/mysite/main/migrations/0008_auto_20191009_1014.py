# Generated by Django 2.2.4 on 2019-10-09 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documentmanager', '0007_remove_στρατολογικά_πρωτόκολλο_απάντησης'),
    ]

    operations = [
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='αριθμός_πρωτοκόλλου',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αριθμός Πρωτοκόλλου'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='δκα',
            field=models.CharField(blank=True, max_length=500, verbose_name='ΔΚΑ'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='επώνυμο',
            field=models.CharField(blank=True, max_length=500, verbose_name='Επώνυμο'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='εσωτερικό_πρωτ',
            field=models.CharField(blank=True, max_length=500, verbose_name='Εσωτερικό Πρωτόκολλο'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='πρωτοδικείο',
            field=models.CharField(blank=True, max_length=500, verbose_name='Διοικητικό Πρωτοδικείο'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='πρωτόκολλο_απάντησης',
            field=models.CharField(blank=True, max_length=500, verbose_name='Πρωτόκολλο απάντησης'),
        ),
        migrations.AlterField(
            model_name='διοικητικά_πρωτοδικεία',
            name='όνομα',
            field=models.CharField(blank=True, max_length=500, verbose_name='Όνομα'),
        ),
        migrations.AlterField(
            model_name='λοιπή_αλληλογραφία',
            name='αποστολέας',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αποστολέας'),
        ),
        migrations.AlterField(
            model_name='λοιπή_αλληλογραφία',
            name='αριθμός_πρωτοκόλλου',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αριθμός Πρωτοκόλλου'),
        ),
        migrations.AlterField(
            model_name='λοιπή_αλληλογραφία',
            name='αριθμός_πρωτοκόλλου_εισερχόμενης_αλληλογραφίας',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αριθμός Πρωτοκόλλου Εισερχόμενης Αλληλογραφίας'),
        ),
        migrations.AlterField(
            model_name='λοιπή_αλληλογραφία',
            name='πρωτόκολλο_απάντησης',
            field=models.CharField(blank=True, max_length=200, verbose_name='Πρωτόκολλο απάντησης'),
        ),
        migrations.AlterField(
            model_name='στρατολογικά',
            name='αποστολέας',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αποστολέας'),
        ),
        migrations.AlterField(
            model_name='στρατολογικά',
            name='αριθμός_πρωτοκόλλου',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αριθμός Πρωτοκόλλου'),
        ),
        migrations.AlterField(
            model_name='στρατολογικά',
            name='αριθμός_πρωτοκόλλου_εισερχόμενης_αλληλογραφίας',
            field=models.CharField(blank=True, max_length=500, verbose_name='Αριθμός Πρωτοκόλλου Εισερχόμενης Αλληλογραφίας'),
        ),
        migrations.AlterField(
            model_name='στρατολογικά',
            name='ημερομηνία_παράδοσης_στην_πληροφορική',
            field=models.CharField(blank=True, max_length=500, verbose_name='Ημερομηνία παράδοσης στην πληροφορική'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='email',
            field=models.CharField(blank=True, max_length=500, verbose_name='Email Αποστολή Αποφάσεων'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='απάντηση_που_δώσαμε',
            field=models.CharField(blank=True, max_length=600, verbose_name='Απάντηση που δώσαμε'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='αριθμός_πρωτοκόλλου',
            field=models.CharField(blank=True, max_length=200, verbose_name='Αριθμός Πρωτοκόλλου'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='δκα',
            field=models.CharField(blank=True, max_length=200, verbose_name='ΔΚΑ'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='επώνυμο',
            field=models.CharField(blank=True, max_length=200, verbose_name='Επώνυμο'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='πρωτόκολλο_απάντησης',
            field=models.CharField(blank=True, max_length=200, verbose_name='Πρωτόκολλο απάντησης'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='στοιχεία_παραλήπτη',
            field=models.CharField(blank=True, max_length=500, verbose_name='Στοιχεία Παραλήπτη'),
        ),
        migrations.AlterField(
            model_name='χρεώσεις_αιτήματα',
            name='όνομα',
            field=models.CharField(blank=True, max_length=200, verbose_name='Όνομα'),
        ),
    ]
