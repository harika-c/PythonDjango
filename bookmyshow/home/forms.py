from django import forms
from .models import Tweet
from django.conf import settings
MAX_LENGTH=settings.MAX_LENGTH
class CreateTweetForm(forms.ModelForm):
    print("............forms............")
    class Meta:
        model=Tweet
        fields=['content']
    def clean_content(self):
        print(f'///////ddddd......{self.cleaned_data}')
        contentTweet=self.cleaned_data.get("content")
        print(f'.......{contentTweet}......{self.cleaned_data}')
        if len(contentTweet) > MAX_LENGTH :
             raise forms.ValidationError("tweet is too long")
        return contentTweet
        