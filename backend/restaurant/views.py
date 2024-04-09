from django.shortcuts import render

from django.db.models import Q
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404,
    ListAPIView,
)
from rest_framework.response import Response
from .models import Restaurant
from .serializers import RestaurantSerializer
from rest_framework import status


class RestaurantListView(ListCreateAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        search_query = self.request.query_params.get('search')
        if search_query:
            return Restaurant.objects.filter(Q(name__icontains=search_query) | Q(country__icontains=search_query))
        return Restaurant.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = self.request.user
            serializer.save()
            return Response("restaurant created", serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RestaurantDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class RestaurantListByCategoryView(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(category=category_id)


class RestaurantListByUserView(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(user=user_id).order_by('id')



