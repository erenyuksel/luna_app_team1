from django.urls import path

from user.views import ListUsersView, CreateUser, VeryfiUserView, UserMeView, GetUserView

urlpatterns = [
    path('users/', ListUsersView.as_view(), name='get all users'),
    path('users/<int:pk>/', GetUserView.as_view(), name='get specific user'),
    path('users/registration/', CreateUser.as_view(), name='user registration with email'),
    path('users/validation/', VeryfiUserView.as_view(), name='user verification'),
    path('users/me/', UserMeView.as_view(), name='get my user object'),
]
