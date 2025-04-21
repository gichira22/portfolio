from rest_framework import serializers
from .models import Category, Tag, Post, Comment, NewsletterSubscription

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'icon']

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    reply_count = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ['id', 'content', 'created_at', 'author', 'parent', 'reply_count']

    def get_author(self, obj):
        return {
            'id': obj.author.id,
            'username': obj.author.username
        }

    def get_reply_count(self, obj):
        return obj.replies.count()

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    tags = TagSerializer(many=True)
    author = serializers.SerializerMethodField()
    like_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'content', 'excerpt', 'category', 'tags',
            'featured_image', 'author', 'created_at', 'updated_at', 'likes',
            'views', 'like_count', 'is_liked', 'comment_count'
        ]

    def get_author(self, obj):
        return {
            'id': obj.author.id,
            'username': obj.author.username
        }

    def get_like_count(self, obj):
        return obj.likes.count()

    def get_is_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(id=request.user.id).exists()
        return False

    def get_comment_count(self, obj):
        return obj.comments.count()

class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscription
        fields = ['email']
