from django.urls import path
from comment.views import DeleteCommentView, CommentCreateView, UserCommentListView, SpecificReviewCommentView

urlpatterns = [
    path('review/comment/user/<int:user_id>/', UserCommentListView.as_view(), name='comment-list'),
    path('review/comment/new/<int:review_id>/', CommentCreateView.as_view(), name='comment-create'),
    path('review/comment/<int:pk>/', DeleteCommentView.as_view(), name='delete-comment'),
    path('review/comment/review/<int:pk>/', SpecificReviewCommentView.as_view(), name='get specific review comments')

]
