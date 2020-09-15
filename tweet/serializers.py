from rest_framework import serializers
from .models import Tweet
from django.conf import settings
MAX_LENGTH=settings.MAX_LENGTH
class TweetSerializer(serializers.ModelSerializer):
    print(f"......serializers..{serializers.ModelSerializer}")
    class Meta:
        model= Tweet
        fields=['content']
    def validate_content(self,value):
        if len(value) > MAX_LENGTH:
            raise serializers.ValidationError(f"tweet is very long, should have only {MAX_LENGTH} characters")
        return value 