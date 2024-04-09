from django.contrib.auth import get_user_model
from django.db import models

from restaurant.models import Restaurant

User = get_user_model()

RATING_CHOICES = {
    "1": "Terrible",
    "2": "Bad",
    "3": "Average",
    "4": "Good",
    "5": "Excellent",
}


class Review(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    rating_stars = models.CharField(max_length=50, choices=RATING_CHOICES)
    text_content = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(User, related_name='liked_reviews')

    def __str__(self):
        return f"Review for {self.restaurant.name} by {self.user.name}"
