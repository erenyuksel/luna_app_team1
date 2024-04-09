from django.urls import path
from .views import (
    RestaurantListView,
    DeleteUpdateRestaurantView,
    RestaurantListByCategoryView,
    RestaurantListByUserView, FourBestRestaurantsView, CreateRestaurantView, SearchRestaurantView, CategoriesListView,
)

urlpatterns = [
    path('restaurants/', RestaurantListView.as_view(), name='restaurant-list'),
    path('restaurants/new/', CreateRestaurantView.as_view(), name='create restaurant'),
    path('restaurants/<int:pk>/', DeleteUpdateRestaurantView.as_view(), name='restaurant-detail'),
    path('restaurants/category/<int:category_id>/', RestaurantListByCategoryView.as_view(), name='restaurant-list-by'
                                                                                                 '-category'),
    path('restaurants/user/<int:user_id>/', RestaurantListByUserView.as_view(), name='restaurant-list-by-user'),
    path('home/', FourBestRestaurantsView.as_view(), name='4 best restaurants'),
    path('search/restaurants/', SearchRestaurantView.as_view(), name='search restaurants'),
    path('category/list', CategoriesListView.as_view(), name='get all categories')
]
