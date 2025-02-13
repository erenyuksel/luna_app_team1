# Generated by Django 5.0.3 on 2024-04-10 13:56

import django.db.models.deletion
import registration_profile.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationProfile',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='registration_profile', serialize=False, to=settings.AUTH_USER_MODEL)),
                ('code', models.CharField(default=registration_profile.models.code_generator, max_length=5, unique=True)),
                ('reset_password_code', models.CharField(blank=True, max_length=5)),
            ],
        ),
    ]
