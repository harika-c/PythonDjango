from django.shortcuts import render
from django.http import HttpResponse
from .models import AboutBirds
from .forms import CreateBirdsForm

# Create your views here.

def birds_main_page(request,*args,**kwargs):
    obj=AboutBirds.objects.all()
    context={
        "object":obj
    }
    return render(request,"birdsmainpage.html",context)
def dynamic_lookup_view(request,id):
    obj=AboutBirds.objects.get(id=id)
    print(f'.....{request}')
    context={
    "object":obj
    }
    return render(request,'dynamic_birds.html',context)
def create_bird(request):
    form=CreateBirdsForm(request.POST or None)
    if form.is_valid():
        form.save()
        form=CreateBirdsForm()
    context={
        "form":form
    }
    return render(request,"birds_create.html",context)


