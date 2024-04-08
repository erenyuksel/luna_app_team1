from django.contrib.auth.models import AbstractUser
from django.db import models


def user_directory_path(instance, filename):
    return f'{instance.id}/user/{filename}'


class ThingsILove(models.Model):
    thing = models.CharField(max_length=200)

    def __str__(self):
        return self.thing


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(verbose_name='username', max_length=200, unique=True)
    location = models.CharField(verbose_name='user location', max_length=200, blank=True)
    first_name = models.CharField(verbose_name='first name', max_length=200, blank=True)
    last_name = models.CharField(verbose_name='last name', max_length=200, blank=True)
    phone = models.CharField(verbose_name='phone', max_length=12, blank=True, null=True)
    description = models.TextField(verbose_name='description', max_length=400, blank=True)
    joined_date = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    profile_picture = models.ImageField(verbose_name='picture', upload_to=user_directory_path, blank=True, null=True)
    things_i_love = models.ManyToManyField(ThingsILove, related_name='user',
                                           verbose_name='Things User likes', blank=True, )

    # @property
    # def posts_count(self):
    #     return self.review.count()
    #
    # @property
    # def posts_count(self):
    #     return self.comment.count()

    def __str__(self):
        return self.username
