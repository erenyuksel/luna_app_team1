from django.urls import path

from review.views import CreateReviewView, RestaurantReviewsListView, ListReviewsUserView, UpdateReviewView, \
    ToggleLikePostView, CurrentUserLikedReviewsView, SearchReviewView

urlpatterns = [
    path('reviews/new/<int:restaurant_id>/', CreateReviewView.as_view(), name='review-create'),
    path('reviews/restaurant/<int:restaurant_id>/', RestaurantReviewsListView.as_view(), name='review-list'),
    path('reviews/user/<int:user_id>/', ListReviewsUserView.as_view(), name='user-reviews-list'),
    path('reviews/<int:pk>/', UpdateReviewView.as_view(), name='update-review'),
    path('reviews/like/<int:pk>/', ToggleLikePostView.as_view(), name='like review'),
    path('reviews/likes/', CurrentUserLikedReviewsView.as_view(), name='get reviews current user liked '),
    path('reviews/comments/', CurrentUserLikedReviewsView.as_view(), name='get reviews current user commented'),
    path('search/reviews/', SearchReviewView.as_view(), name='review-search')

]
