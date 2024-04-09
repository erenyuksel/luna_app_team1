from django.urls import path

from review.views import CreateReviewView, RestaurantReviewsListView, ListReviewsUserView, UpdateReviewView


urlpatterns = [
    path('reviews/new/<int:restaurant_id>/', CreateReviewView.as_view(), name='review-create'),
    path('reviews/restaurant/<int:restaurant_id>/', RestaurantReviewsListView.as_view(), name='review-list'),
    path('reviews/user/<int:user_id>/', ListReviewsUserView.as_view(), name='user-reviews-list'),
    path('reviews/<int:pk>/', UpdateReviewView.as_view(), name='update-review'),

]
