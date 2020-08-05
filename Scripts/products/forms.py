from django import forms
from .models import Product

class ProductForm(forms,Product):
    class Meta:
        model=Product
        fields=[
            'title',
            'description',
            'price'
        ]