# Generated by Django 5.0.3 on 2024-04-08 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=150)),
                ('street', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=100)),
                ('zip', models.CharField(max_length=10)),
                ('phone', models.CharField(max_length=15, null=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('opening_hours', models.IntegerField(max_length=15, null=True)),
                ('price_level', models.IntegerField(max_length=15, null=True)),
                ('image', models.ImageField(upload_to='restaurant_directory_path')),
                ('category', models.CharField(choices=[('Thai', 'Thai Food'), ('Asia', 'Asia Food'), ('Indian', 'Indian Food'), ('French', 'French Food'), ('Mexican', 'Mexican Food'), ('Italian', 'Italian Food')], max_length=50)),
            ],
        ),
    ]
