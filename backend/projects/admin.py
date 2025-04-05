from django.contrib import admin
from .models import Project

# Register your models here.

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technology', 'created_at')
    search_fields = ('title', 'description', 'technology')
    list_filter = ('created_at', 'technology')
