from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, PostViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
