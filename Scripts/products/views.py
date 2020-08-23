from django.shortcuts import render,get_object_or_404, redirect
from .models import Product
from .forms import RawProductForm
from .forms import ProductForm
from django.http import Http404
# Create your views here.

# def animals_createview(request):
#     # print(f'.....post.....{request.POST}')
#     # print(f'.....get.....{request.GET}')
#     if request.method=='POST':
#         my_new_title=request.POST.get('title')
#         # Product.objects.create(title=my_new_title,price=22.12)
#         print(my_new_title)
#     context={}
#     return render(request,'allanimals/animal_create.html',context)
# def animals_createview(request):
#     my_form = RawProductForm(request.POST)
#     if request.method=="POST":
#         my_form=RawProductForm(request.POST)
#         if my_form.is_valid():
#             print(my_form.cleaned_data)
#             Product.objects.create(**my_form.cleaned_data)
#         else:
#             print(my_form.errors)
#     context={
#         'form':my_form
#     }
#     return render(request,'allanimals/animal_create.html',context)

def animals_view(request):
    obj=Product.objects.get(id=5)
    context={
        'object':obj
    }
    return render(request,'allanimals/rex.html',context)
def animals_createview(request):
    form=ProductForm(request.POST or None)
    if form.is_valid():
        form.save()
        form=ProductForm()

    context={
        'form':form
    }
    return render(request,'allanimals/animal_create.html',context)

def render_initial_data2(request):
    initial={
        'title':"default title "
    }
    obj1=Product.objects.get(id=18)
    form=ProductForm(request.POST or None ,instance=obj1)
    # if form.is_valid():
    #     form.save()
    context={
        'form':form
    }
    return render(request,"allanimals/animal_create.html",context)
def dynamic_lookup_view(request,id):
    # obj=Product.objects.get(id=my_id)
    obj=get_object_or_404(Product,id=id)
    if request.method=="POST":
        obj.delete()
        return redirect('../../')

    # try :
    #     obj = Product.objects.get(id=my_id)
    # except Product.DoesNotExist:
    #     raise Http404

    context={
        "object":obj
    }
    return render(request,"allanimals/animals_delete.html",context)

def list_all_products(request):
    obj=Product.objects.all()
    context={
        'object':obj
    }
    return render(request,'allanimals/listallanimals.html',context)







