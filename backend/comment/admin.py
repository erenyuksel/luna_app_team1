# from django.contrib import admin
#
from django.contrib import admin

from comment.models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', "review", "text_content", "date_created", "date_modified")
    search_fields = ('user__username', 'review__id', 'text_content',)



