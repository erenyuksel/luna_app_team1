from django.urls import path
from .views import (
    RestaurantListView,
    RestaurantDetailView,
    RestaurantListByCategoryView,
    RestaurantListByUserView,
)

urlpatterns = [
    path('restaurants/', RestaurantListView.as_view(), name='restaurant-list'),
    path('restaurants/<int:pk>/', RestaurantDetailView.as_view(), name='restaurant-detail'),
    path('restaurants/category/<int:category_id>/', RestaurantListByCategoryView.as_view(), name='restaurant-list-by'
                                                                                                 '-category'),
    path('restaurants/user/<int:user_id>/', RestaurantListByUserView.as_view(), name='restaurant-list-by-user'),
]
