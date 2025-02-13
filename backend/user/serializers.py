from django.contrib.auth import get_user_model
from rest_framework import serializers

from user.models import ThingsILove

# from backend.comment.models import Post

User = get_user_model()


class ThingsILoveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThingsILove
        fields = ['thing',]


class UserSerializer(serializers.ModelSerializer):
    things_i_love = ThingsILoveSerializer(many=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'email', 'phone', 'first_name', 'last_name', 'username', 'location', 'things_i_love',
                  'profile_picture', 'banner_picture', 'joined_date', 'description', 'total_review', 'total_comments']
        read_only_fields = ['email']


class UserRegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField()


class UserMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'location', 'things_i_love']
