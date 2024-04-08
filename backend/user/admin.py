from django.contrib import admin
from .models import User, ThingsILove
from django.contrib.auth.admin import UserAdmin


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('joined_date',)
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'profile_picture')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'joined_date')}),
        ('Social', {'fields': ('location', 'description', 'things_i_love')}),
    )
    list_display = ('email', 'first_name', 'last_name', 'location', 'phone', 'joined_date')
    ordering = ('email',)


@admin.register(ThingsILove)
class ThingsUserLikeAdmin(admin.ModelAdmin):
    list_display = ('thing',)
