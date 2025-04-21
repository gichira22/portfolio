"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from projects.views import ProjectViewSet
from blog.views import PostViewSet, CategoryViewSet, TagViewSet, LikePostView, CommentViewSet, NewsletterSubscriptionView
from contact.views import contact_form

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'posts', PostViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'tags', TagViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/contact/', contact_form, name='contact_form'),
    path('api/posts/<int:pk>/like/', LikePostView.as_view({'post': 'create'}), name='like_post'),
    path('api/posts/<int:post_id>/comments/', CommentViewSet.as_view({'get': 'list', 'post': 'create'}), name='post_comments'),
    path('api/posts/<int:post_id>/comments/<int:pk>/', CommentViewSet.as_view({'put': 'update', 'delete': 'destroy'}), name='comment_detail'),
    path('api/newsletter/subscribe/', NewsletterSubscriptionView.as_view({'post': 'create'}), name='newsletter_subscribe'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
