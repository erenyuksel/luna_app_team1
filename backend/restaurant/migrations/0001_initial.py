# Generated by Django 5.0.3 on 2024-04-10 13:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=150)),
                ('street', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=100)),
                ('zip', models.IntegerField()),
                ('website', models.CharField(blank=True, max_length=100)),
                ('phone', models.CharField(max_length=30, null=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('opening_hours', models.CharField(max_length=50, null=True)),
                ('price_level', models.IntegerField(choices=[(1, '$'), (2, '$$'), (3, '$$$')])),
                ('image', models.ImageField(blank=True, upload_to='restaurant_directory_path')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='restaurants', to='restaurant.categories')),
            ],
        ),
    ]
