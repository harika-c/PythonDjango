from django import forms
from .models import Tweet
from django.conf import settings
MAX_LENGTH=settings.MAX_LENGTH
class CreateTweetForm(forms.ModelForm):
    print("............forms............")
    class Meta:
        model=Tweet
        fields=['username','password']
    def clean_content(self):
        print(f'///////ddddd......{self.cleaned_data}')
        contentTweet=self.cleaned_data.get("username")
        return contentTweet
        