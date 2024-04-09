from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db.models import Q
# from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from user.permissions import IsSelf
from user.serializers import UserSerializer, UserRegistrationSerializer, UserMeSerializer

User = get_user_model()


# comment
class ListUsersView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class GetUserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        return User.objects.filter(id=self.kwargs['pk'])


class FindUserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        search_query = self.request.query_params.get('search')
        if search_query != '':
            return User.objects.filter(Q(first_name__icontains=search_query) |
                                        Q(last_name__icontains=search_query) |
                                        Q(email__icontains=search_query))
        return User.objects.all()


class UserMeView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserMeSerializer
    permission_classes = [IsSelf]
    queryset = User.objects.all()

    # def get_queryset(self):
    #     return User.objects.filter(id=self.request.user.id)


class CreateUser(CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get('email')
        if email:
            if User.objects.filter(email=email).exists():
                return Response('User already exists', status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User.objects.create(email=email, username=email)
                code = user.registration_profile.code
                send_mail(
                    'Registration code:',
                    f'Welcome to LUNA, this is your Registration Code: {code}',
                    'fullstackluna@gmail.com',
                    [email, ],
                    fail_silently=False,
                )
                return Response("Code was generated and sent to your email", status=status.HTTP_200_OK)
        else:
            return Response("No email provided", status=status.HTTP_400_BAD_REQUEST)


class VeryfiUserView(UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = []

    def patch(self, request, *args, **kwargs):
        email = request.data.get('email')
        code = request.data.get('code')
        username = request.data.get('username')
        location = request.data.get('location')
        password = request.data.get('password')
        re_password = request.data.get('password_repeat')

        if password != re_password:
            return Response('Password does not match', status=status.HTTP_400_BAD_REQUEST)

        if not all([email, code, username, location, password, re_password]):
            return Response('Missing required fields', status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
            if user.registration_profile.code == code:
                user.location = location
                user.username = username
                user.set_password(password)
                user.save()

                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)

            return Response('Invalid verification code', status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response('This User does not exist.', status=status.HTTP_400_BAD_REQUEST)


