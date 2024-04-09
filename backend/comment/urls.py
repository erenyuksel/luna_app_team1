from django.urls import path
from comment.views import DeleteCommentView, CommentCreateView, UserCommentListView

urlpatterns = [
    path('review/comment/<int:user_id>/', UserCommentListView.as_view(), name='comment-list'),
    path('review/comment/new/<int:review_id>/', CommentCreateView.as_view(), name='comment-create'),
    path('review/comment/del/<int:pk>/', DeleteCommentView.as_view(), name='delete-comment')

]
