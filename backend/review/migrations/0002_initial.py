# Generated by Django 5.0.3 on 2024-04-10 13:56

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('restaurant', '0002_initial'),
        ('review', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='liked_reviews', to=settings.AUTH_USER_MODEL, verbose_name='likes'),
        ),
        migrations.AddField(
            model_name='review',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='restaurant.restaurant'),
        ),
        migrations.AddField(
            model_name='review',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='reviews', to=settings.AUTH_USER_MODEL),
        ),
    ]
