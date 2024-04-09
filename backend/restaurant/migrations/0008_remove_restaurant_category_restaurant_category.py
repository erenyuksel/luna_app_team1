# Generated by Django 5.0.3 on 2024-04-09 10:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0007_categories_remove_restaurant_category_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='category',
        ),
        migrations.AddField(
            model_name='restaurant',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, related_name='restaurants', to='restaurant.categories'),
            preserve_default=False,
        ),
    ]
