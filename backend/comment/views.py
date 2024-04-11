from django.contrib.auth import get_user_model
from rest_framework.generics import DestroyAPIView, CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated

from comment.models import Comment
from comment.permissions import IsAuthor
from comment.serializers import CommentSerializer
from review.models import Review

User = get_user_model()


# class CommentViewSet(RetrieveUpdateDestroyAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer
#     permission_classes = [IsAuthor]
#
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

class CommentCreateView(CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        review = Review.objects.get(id=self.kwargs['review_id'])
        serializer.save(user=self.request.user, review=review)


class UserCommentListView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = User.objects.get(id=self.kwargs['user_id'])
        return Comment.objects.filter(user=user)


class DeleteCommentView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthor]


class SpecificReviewCommentView(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = []

    def get_queryset(self):
        review = None
        try:
            review = Review.objects.get(id=self.kwargs['pk'])
        except Exception as e:
            print(e, "No review found")
        if review:
            return Comment.objects.filter(review=review)
        return []
