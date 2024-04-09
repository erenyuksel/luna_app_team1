from rest_framework import serializers

from comment.models import Comment
from review.serializers import ReviewSerializer
from user.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['review', 'user']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = UserSerializer(instance.user).data
        representation['review'] = ReviewSerializer(instance.review).data
        # representation['likes'] = UserSerializer(instance.likes, many=True).data
        return representation
