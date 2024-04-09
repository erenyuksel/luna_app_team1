# from django.shortcuts import render
#
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.generics import CreateAPIView, ListCreateAPIView, ListAPIView, RetrieveUpdateAPIView, \
    DestroyAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from restaurant.models import Restaurant
from review.models import Review
from review.serializers import ReviewSerializer


class CreateReviewView(CreateAPIView):
    serializer_class = ReviewSerializer


def get_queryset(self):
    restaurant_id = self.kwargs['restaurant_id']
    return Review.objects.filter(restaurant_id=restaurant_id)


def perform_create(self, serializer):
    restaurant_id = self.kwargs['restaurant_id']
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_id)
    except Restaurant.DoesNotExist:
        raise NotFound('Restaurant not found')

    serializer.save(restaurant=restaurant, user=self.request.user)


class RestaurantReviewsListView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        restaurant_id = self.kwargs['restaurant_id']
        try:
            restaurant = Restaurant.objects.get(pk=restaurant_id)
        except Restaurant.DoesNotExist:
            raise NotFound('Restaurant not found')

        return Review.objects.filter(restaurant=restaurant)


class ListReviewsUserView(ListAPIView):
    serializer_class = ReviewSerializer
    lookup_url_kwarg = "user_id"

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Review.objects.filter(user__id=user_id).order_by("-date_created")


class UpdateReviewView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]
    queryset = Review.objects.all()
#
#     def get_queryset(self):
#         return Review.objects.all()
#
#     def update(self, request, *args, **kwargs):
#         instance = self.get_object()
#         if request.user == instance.user or request.user.is_staff:
#             return super().update(request, *args, **kwargs)
#         else:
#             raise PermissionDenied("You do not have permission to perform this action.")
#
#
# class DeleteReviewView(DestroyAPIView):
#     queryset = Review.objects.all()
#     permission_classes = [IsAuthenticated]
#     serializer_class = ReviewSerializer
#
#     def delete(self, request, *args, **kwargs):
#         instance = self.get_object()
#         if request.user == instance.user or request.user.is_staff:
#             return super().delete(request, *args, **kwargs)
#         else:
#             raise PermissionDenied("You do not have permission to perform this action.")
