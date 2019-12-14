# Generated by Django 2.2.4 on 2019-11-25 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('documentmanager', '0008_auto_20191125_1500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='contents', to='documentmanager.Folder'),
        ),
    ]
