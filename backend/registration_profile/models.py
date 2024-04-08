import random

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


# Create your models here.
class RegistrationProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='registration_profile')
    code = models.CharField(max_length=5, unique=True, default=code_generator)

    def __str__(self):
        return (f'username: {self.user.username}, generated code: {self.code}')


@receiver(post_save, sender=User)
def create_registration_profile(sender, instance, **kwargs):
    RegistrationProfile.objects.get_or_create(user=instance)
