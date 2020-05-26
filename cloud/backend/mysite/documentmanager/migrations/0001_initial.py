# Generated by Django 3.0.1 on 2020-01-01 20:34

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import documentmanager.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='title')),
                ('creation_date', models.DateTimeField(auto_now_add=True, verbose_name='Created')),
                ('modification_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False, null=True, verbose_name='Modified')),
                ('icon', models.FilePathField(blank=True, editable=False, null=True)),
                ('creator', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.PROTECT, related_name='creator', to=settings.AUTH_USER_MODEL)),
                ('modification_user', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.PROTECT, related_name='modification_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('item_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='documentmanager.Item')),
            ],
            bases=('documentmanager.item',),
        ),
        migrations.CreateModel(
            name='Folder',
            fields=[
                ('item_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='documentmanager.Item')),
            ],
            bases=('documentmanager.item',),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True, verbose_name='Date added')),
                ('comment_body', models.TextField(max_length=1450, verbose_name='Comment')),
                ('item_fk', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='documentmanager.Item')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='item',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='folder_parent', to='documentmanager.Folder'),
        ),
        migrations.CreateModel(
            name='FileVersion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fileuploaded', models.FileField(unique=True, upload_to=documentmanager.models.generate_filename, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf'])])),
                ('original_filename', models.CharField(max_length=200, verbose_name='Filename')),
                ('uploadtime', models.DateTimeField(auto_now_add=True, verbose_name='Uploaded')),
                ('creator', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.PROTECT, related_name='FileVersion_creator', to=settings.AUTH_USER_MODEL)),
                ('file', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='main_file', to='documentmanager.File')),
            ],
        ),
        migrations.AddField(
            model_name='file',
            name='current_version',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='current_version', to='documentmanager.FileVersion'),
        ),
    ]