# Generated by Django 2.2.4 on 2019-11-09 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documentmanager', '0008_auto_20191009_1014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='λοιπή_αλληλογραφία',
            name='εμπλεκόμενα_άτομα',
            field=models.TextField(blank=True, max_length=2500, verbose_name='Εμπλεκόμενα άτομα'),
        ),
    ]
