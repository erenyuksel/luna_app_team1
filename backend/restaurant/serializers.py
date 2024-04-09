from rest_framework import serializers
from .models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'user', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'image', 'category']
