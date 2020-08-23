from django.urls import path
from.views import restsample


app_name='restapi'

urlpatterns=[
    path('<int:apiid>',restsample,name='rest-first'),
]