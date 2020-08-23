from django.db import models
from django.urls import reverse
# Create your models here.
class Rest(models.Model):
    name=models.CharField(max_length=20)
    context=models.BooleanField()
    attire=models.TextField()
    def absolute_url(self):
        return reverse("restapi:rest-first",kwargs={'a':self.id})