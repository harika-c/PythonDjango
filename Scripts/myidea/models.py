from django.db import models
from django.urls import reverse
class AboutBirds(models.Model):
    name=models.TextField()
    country=models.TextField()
    canfly=models.BooleanField(default=True)
    def get_absolute_url(self):
        return reverse("bird:eachbird",kwargs={"id":self.id})

# Create your models here.
