from django.urls import path

from user.views import ListUsersView, CreateUser, VeryfiUserView, UserMeView, GetUserView, FindUserView, ResetPassword, \
    ValidateResetPassword

urlpatterns = [
    path('users/list/', ListUsersView.as_view(), name='get all users'),
    path('users/<int:pk>/', GetUserView.as_view(), name='get specific user'),
    path('search/users/', FindUserView.as_view(), name='find user'),
    path('users/registration/', CreateUser.as_view(), name='user registration with email'),
    path('users/validation/', VeryfiUserView.as_view(), name='user verification'),
    path('users/me/<int:pk>/', UserMeView.as_view(), name='get my user object'),
    path('auth/password-reset/', ResetPassword.as_view(), name='validate password reset'),
    path('auth/password-reset/validate/', ValidateResetPassword.as_view(), name='validate password reset'),
]
