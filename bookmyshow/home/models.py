from django.db import models
from random import randint
from django.conf import settings
from django.urls import reverse
User=settings.AUTH_USER_MODEL
# Create your models here.
class Tweet(models.Model):
    print("............models............")
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    content=models.TextField(blank=True, null=True)
    image=models.FileField(upload_to='images/',blank=True,null=True)
    
    # def __str__(self):
    #     return self.content

    class Meta:
        ordering=['-id']
        
    def serialize(self):
        return { 
        "id": self.id,
        "content": self.content,
        "likes": randint(0,200)
         }
class Movies(models.Model):
    moviename=models.TextField(blank=True, null=True)
    imagename=models.TextField(blank=True, null=True)
    moviecontext=models.TextField(blank=True, null=True)
    hallname=models.TextField(blank=True,null=True)
    locationname=models.TextField(blank=True,null=True)
    def serialize(self):
        return { 
        "moviename": self.moviename,
        "imagename": self.imagename,
        "moviecontext": self.moviecontext,
        "hallname":self.hallname,
        "locationname":self.locationname
         }
    def get_absolute_url(self):
        return reverse("single-show",kwargs={'movie_id':self.id})