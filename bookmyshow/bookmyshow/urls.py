"""bookmyshow URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path,include
from home.views import home_view,movie_detail_view,dynamic_look_up_view,movie_list_view,tweet_create_view,all_shows,Movie_Single_View,seat_booking_page_view,seat_confirmation_page,user_create

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home_view),
    path('movie/apis/<int:id>',dynamic_look_up_view,name='single-show'),
    path('movie/<int:id>',Movie_Single_View.as_view(),name='single-show'),
    path('movielist/',movie_list_view),
    path('create-tweets/',tweet_create_view),
    path('allshows/',all_shows),
    path('seat-booking-page/',seat_booking_page_view),
    path('seat-confirmation/',seat_confirmation_page),
    # path('register-user/',include('userauthentication.urls')),
   
    path('register/',user_create,name='reg')


]
