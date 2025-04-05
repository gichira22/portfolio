from django.contrib import admin
from .models import Post

# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'created_at')
    search_fields = ('title', 'content')
    list_filter = ('published', 'created_at')
    prepopulated_fields = {'slug': ('title',)}
