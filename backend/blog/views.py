from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

# Create your views here.

class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.filter(published=True).order_by('-created_at')
    serializer_class = PostSerializer
