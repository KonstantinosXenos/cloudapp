from __future__ import unicode_literals
from django.db import migrations, models
from django.contrib.auth.models import User     # where User lives
import os                                      # env var access


def forwards_func(apps, schema_editor):
  # build the user you now have access to via Django magic
    user=User.objects.create_superuser('admin', 'myemail@test.com', 'admin')
    user.save()

class Migration(migrations.Migration):

    dependencies = [
        ('documentmanager', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(forwards_func),
    ]
