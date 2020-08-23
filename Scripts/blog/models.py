from django.db import models
from django.urls import reverse

# Create your models here.
class Article(models.Model):
    name=models.CharField(max_length=30)
    subject=models.BooleanField()
    content=models.TextField()
    def get_absolute_url(self):
        return reverse("templates:article-d",kwargs={'my':self.id})