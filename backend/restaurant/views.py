from django.db.models import Q
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListAPIView, CreateAPIView,
)
from rest_framework.permissions import IsAuthenticated
from .models import Restaurant, Categories
from .permissions import IsAuthor
from .serializers import RestaurantSerializer
from django.db.models import Avg


class SearchRestaurantView(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        search_query = self.request.query_params.get('search', None)
        if search_query is not None:
            return Restaurant.objects.filter(Q(name__icontains=search_query) |
                                             Q(country__icontains=search_query) |
                                             Q(city__icontains=search_query) |
                                             Q(category__name__icontains=search_query))
        return Restaurant.objects.all()


class RestaurantListView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []


class CategoriesListView(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Categories.objects.all()
    permission_classes = []


class CreateRestaurantView(CreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class DeleteUpdateRestaurantView(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = [IsAuthor]


class RestaurantListByCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        return Restaurant.objects.filter(category=self.kwargs['category_id'])


class RestaurantListByUserView(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(user=user_id).order_by('id')


class FourBestRestaurantsView(ListAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = []

    def get_queryset(self):
        products_with_ratings = Restaurant.objects.annotate(average_rating=Avg('reviews__rating_stars'))
        return products_with_ratings.order_by('average_rating')[:4]

    # def get_queryset(self):
    #     search_query = self.request.query_params.get('search')
    #     if search_query:
    #         return Restaurant.objects.filter(Q(name__icontains=search_query) | Q(country__icontains=search_query))
    #     return Restaurant.objects.all()
    #
    # def post(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.validated_data['user'] = self.request.user
    #         serializer.save()
    #         return Response("restaurant created", serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
