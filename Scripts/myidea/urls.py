from django.urls import path
from .views import birds_main_page,dynamic_lookup_view,create_bird
app_name='bird'
urlpatterns=[
    path('',birds_main_page),
    path('<int:id>/',dynamic_lookup_view,name='eachbird'),
    path('create/',create_bird,name="create-bird")
]