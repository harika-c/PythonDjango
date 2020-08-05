from django.shortcuts import render
from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse

def home_view(request,*args,**kwargs):
    return render(request,'home.html',{})

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
