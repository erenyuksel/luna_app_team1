from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def restaurant_directory_path(instance, filename):
    return f'{instance.id}/restaurant/{filename}'


CATEGORY_CHOICES = {
    "Thai": "Thai Food",
    "Asia": "Asia Food",
    "Indian": "Indian Food",
    "French": "French Food",
    "Mexican": "Mexican Food",
    "Italian": "Italian Food",
}


class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='restaurants')
    country = models.CharField(max_length=150, blank=False)
    street = models.CharField(max_length=150, blank=False)
    city = models.CharField(max_length=100, blank=False)
    zip = models.CharField(max_length=10)
    website = models.URLField
    phone = models.CharField(max_length=15, blank=False, null=True)
    email = models.EmailField(max_length=100, unique=True)
    opening_hours = models.IntegerField(blank=False, null=True)
    price_level = models.IntegerField(blank=False, null=True)
    image = models.ImageField(upload_to='restaurant_directory_path')

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, blank=False)


def __str__(self):
    return self.name
