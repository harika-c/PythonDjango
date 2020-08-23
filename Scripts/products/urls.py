from django.contrib import admin
from django.urls import path
from products.views import animals_view,render_initial_data2,dynamic_lookup_view,list_all_products,animals_createview
app_name='products'
urlpatterns = [
    path('list/', list_all_products),
    path('animals/', animals_view),
    path('initialdata/', render_initial_data2),
    path('create/', animals_createview),
    path('<int:my_id>/delete/', dynamic_lookup_view,name='product-delete' ),
    path('<int:id>/', dynamic_lookup_view,name='product-detail'),
]