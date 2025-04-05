from django.shortcuts import render
from rest_framework import viewsets
from projects.models import Project
from blog.models import Post
from .serializers import ProjectSerializer, PostSerializer

# Create your views here.

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(published=True)
    serializer_class = PostSerializer
