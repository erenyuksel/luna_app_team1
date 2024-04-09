from rest_framework import serializers

from .models import Restaurant, Categories


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['name', ]


class RestaurantSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=False)
    # category_display = serializers.SerializerMethodField()
    price_level_display = serializers.SerializerMethodField()

    class Meta:
        model = Restaurant
        fields = ['id', 'user', 'name', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'image', 'price_level', 'price_level_display', 'category', 'count_reviews', 'rating']

        read_only_fields = ['user', 'price_level_display']

    # def get_category_display(self, obj):
    #     return obj.get_category_display()

    def get_price_level_display(self, obj):
        return obj.get_price_level_display()

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = CategoriesSerializer(instance.category).data
        # representation['likes'] = UserSerializer(instance.likes, many=True).data
        return representation

# still need to be added:
#   Rating
#   amount of ratings
#   Reviews

#
