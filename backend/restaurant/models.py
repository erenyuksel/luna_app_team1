from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def restaurant_directory_path(instance, filename):
    return f'{instance.id}/restaurant/{filename}'


# CATEGORY_CHOICES = {
#     1: "Thai Food",
#     2: "Asia Food",
#     3: "Indian Food",
#     4: "French Food",
#     5: "Mexican Food",
#     6: "Italian Food",
# }

PRICE_LEVEL = {
    1: '$',
    2: '$$',
    3: '$$$'
}


class Categories(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='restaurants')
    country = models.CharField(max_length=150, blank=False)
    street = models.CharField(max_length=150, blank=False)
    city = models.CharField(max_length=100, blank=False)
    zip = models.IntegerField(blank=False)
    website = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=30, blank=False, null=True)
    email = models.EmailField(max_length=100, unique=True)
    opening_hours = models.CharField(max_length=50, blank=False, null=True)
    price_level = models.IntegerField(blank=False, choices=PRICE_LEVEL)
    image = models.ImageField(upload_to='restaurant_directory_path', blank=True)
    category = models.ForeignKey(Categories, related_name='restaurants', on_delete=models.DO_NOTHING)

    # category = models.IntegerField(choices=CATEGORY_CHOICES, blank=False)

    @property
    def count_reviews(self):
        return self.reviews.count() or 0

    @property
    def rating(self):
        ratings = self.reviews.all().values_list('rating_stars', flat=True)
        avg = sum(ratings) / len(ratings)
        return avg

        # return self.reviews.aggregate(Avg('rating_stars')).get('rating__avg') or 0.0

    def __str__(self):
        return self.name
