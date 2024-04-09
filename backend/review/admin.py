# from django.contrib import admin
#
from django.contrib import admin

from review.models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ["restaurant", 'user', "text_content","rating_stars"]
    fields = ["restaurant", 'user',"text_content", 'rating_stars']
