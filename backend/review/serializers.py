from rest_framework import serializers

from restaurant.serializers import RestaurantSerializer
from review.models import Review
from user.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'rating_stars', 'count_likes', 'date_created', 'date_modified', 'restaurant', 'user', 'likes']
        read_only_fields = ['restaurant', 'user', 'likes']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        representation['restaurant'] = RestaurantSerializer(instance.restaurant).data
        # representation['likes'] = UserSerializer(instance.likes, many=True).data
        return representation
