from django.urls import path

from user.views import ListUsersView, CreateUser, VeryfiUserView, UserMeView, GetUserView, FindUserView

urlpatterns = [
    path('users/list/', ListUsersView.as_view(), name='get all users'),
    path('users/<int:pk>/', GetUserView.as_view(), name='get specific user'),
    path('users/search/', FindUserView.as_view(), name='find user'),
    path('users/registration/', CreateUser.as_view(), name='user registration with email'),
    path('users/validation/', VeryfiUserView.as_view(), name='user verification'),
    path('users/me/<int:pk>/', UserMeView.as_view(), name='get my user object'),
]
