#
#
from django.db.models import Q
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, get_object_or_404
from rest_framework.response import Response

from restaurant.models import Restaurant
from review.models import Review
from review.permissions import IsAuthor
from review.serializers import ReviewSerializer


class SearchReviewView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = []

    def get_queryset(self):
        search_query = self.request.query_params.get('search', None)
        if search_query is not None:
            return Review.objects.filter(Q(text_content__icontains=search_query))
        return Review.objects.all()


class CreateReviewView(CreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def perform_create(self, serializer):
        restaurant_id = self.kwargs['restaurant_id']
        try:
            restaurant = Restaurant.objects.get(pk=restaurant_id)
        except Restaurant.DoesNotExist:
            raise NotFound('Restaurant not found')

        serializer.save(restaurant=restaurant, user=self.request.user)


class RestaurantReviewsListView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = []

    def get_queryset(self):
        restaurant_id = self.kwargs['restaurant_id']
        try:
            restaurant = Restaurant.objects.get(id=restaurant_id)
        except Restaurant.DoesNotExist:
            raise NotFound('Restaurant not found')

        return Review.objects.filter(restaurant=restaurant)


class ListReviewsUserView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Review.objects.filter(user__id=user_id).order_by("-date_created")


class UpdateReviewView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    permission_classes = [IsAuthor]


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


class ToggleLikePostView(CreateAPIView):
    serializer_class = ReviewSerializer

    def post(self, request, *args, **kwargs):
        user = request.user
        review = get_object_or_404(Review, id=self.kwargs['pk'])
        if user in review.likes.all():
            review.likes.remove(user)
        else:
            review.likes.add(user)
        return Response('success', status=status.HTTP_201_CREATED)


class CurrentUserLikedReviewsView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(likes=user)


class CurrentUserCommentedReviewsView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(comments__user=user)
