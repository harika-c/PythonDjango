from django.shortcuts import render
from .models import Product
from .forms import ProductForm
# Create your views here.

def animals_createview(request):
    form=ProductForm(request.POST or None)
    if form.is_valid():
        form.save()
    context={
        'form':form
    }
    return render(request,'allanimals/animal_create.html',context)
def animals_view(request):
    obj=Product.objects.get(id=5)
    context={
        'object':obj
    }
    return render(request,'allanimals/rex.html',context)


