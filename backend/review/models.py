from django.contrib.auth import get_user_model
from django.db import models

from restaurant.models import Restaurant

User = get_user_model()

RATING_CHOICES = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
}


class Review(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    rating_stars = models.IntegerField(choices=RATING_CHOICES, blank=False)
    text_content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(User, verbose_name='likes', related_name='liked_reviews', blank=True)

    @property
    def count_likes(self):
        return self.likes.count()

    def __str__(self):
        return f"Review for {self.restaurant.name} by {self.user.username}"
