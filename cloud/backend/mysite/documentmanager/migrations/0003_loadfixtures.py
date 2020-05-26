from django.core.management import call_command
from django.db import migrations
fixture = 'folders'

def load_fixture(apps, schema_editor):
    call_command('loaddata', fixture, app_label='documentmanager') 

class Migration(migrations.Migration):

    dependencies = [('documentmanager', '0002_createsuperuser')
    ]

    operations = [
        migrations.RunPython(load_fixture)
    ]