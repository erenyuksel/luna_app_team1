
from django.urls import path
from comment.views import CommentListCreateView, DeleteCommentView

urlpatterns = [
    path('review/comment/<int:user_id>/', CommentListCreateView.as_view(), name='comment-list'),
    path('review/comment/new/<int:review_id>/', CommentListCreateView.as_view(), name='comment-create'),
    path('review/comment/<int:comment_id>/', DeleteCommentView.as_view(), name='delete-comment')

]