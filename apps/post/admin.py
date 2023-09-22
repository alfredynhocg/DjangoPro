from django.contrib import admin
from .models import Post

def make_published_false(modeladmin, request, queryset):
    queryset.update(publish='False')
make_published_false.short_description = 'Cambiar a False'

def make_published_true(modeladmin, request, queryset):
    queryset.update(publish='True')
make_published_true.short_description = 'Cambiar a True'

@admin.register(Post)
class AdminPost(admin.ModelAdmin):
    list_display = ('title')
    search_fields = ["title"]

    list_display = [
        'title',
        'content',
        'slug',
        'category',
        'publish',
    ]
    
    actions = [make_published_false, make_published_true ]  
    
    class Model:
        model = Post
