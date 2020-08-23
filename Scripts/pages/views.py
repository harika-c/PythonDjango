from django.shortcuts import render
from django.shortcuts import render
from products.models import Product,UserNamePassword
from products.forms import UsernameForm
# Create your views here.
from django.http import HttpResponse

def home_view(request,*args,**kwargs):
    return render(request,'home.html',{})

def signin_page(request,*args,**kwargs):
    signin_form=UsernameForm(request.POST or None)
    if signin_form.is_valid():
        signin_form.save()
        signin_form=UsernameForm()
    context={
        "data":signin_form
    }
    return render(request,'signin.html',context)

def dessert(request,*args,**kwargs):
    return render(request,'dessert.html',{})

def ocean(request,*args,**kwargs):
    content={
        "description": "Ocean is greate",
        "acquatic_animals":['fishes','sharks','dolphins','star fishes',2]
    }
    return render(request,'ocean.html',content)

def forest(request,*args,**kwargs):
    return render(request,'forest.html',{})
