from django.contrib import admin

from restaurant.models import Restaurant, Categories


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'city')
    ordering = ('email',)


@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name',)
    ordering = ('name',)
