from django.shortcuts import render,redirect,get_object_or_404
from django.conf import settings
from random import randint
from django.http import HttpResponse,Http404,JsonResponse
from django.utils.http import is_safe_url
from .models import Tweet
from .models import Movies
from .forms import CreateTweetForm
from .serializers import TweetSerializer,MoviesSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.generic import DetailView


ALLOWED_HOSTS=settings.ALLOWED_HOSTS
user=settings.AUTH_USER_MODEL

def all_shows(request,*args,**kwargs):
    obj=Movies.objects.all()
    context={
            'obj':obj
        }   
    return render(request,'components/allshows.html',context)

def home_view(request,*args,**kwargs):
    print("............views home ............")
    items={'Hyderabad','Delhi'}
    context = {'items': items}
    return render(request,'pages/home.html',context)

@api_view(['GET'])
def tweet_create_view(request,*args,**kwargs):
    obj=Movies.objects.all()
    context={
            'obj':obj
        }
    return Response(request,context,status=400)

@api_view(['GET'])
def movie_list_view(request,*args,**kwargs):
    print("............views list ............")
    obj=Movies.objects.all()
    serializer=MoviesSerializer(obj,many=True)
    print("/???",serializer)
    return Response(serializer.data)
@api_view(['GET'])    
def movie_detail_view(request,movie_id,*args,**kwargs):
    print("............views detail............")
    data={
        "id":movie_id,
    }
    status=200
    try:
        obj=Movies.objects.get(id=movie_id)
        data['content']=obj.moviecontent
    except :
        data['message']='page not found'
        status=400    
    return JsonResponse(data,status=status)

def tweet_create_view_pure_django(request,*args,**kwargs):
    print("............views create pure django ............")
    if not request.user.is_authenticated:
        user=None
        if request.is_ajax():
            return JsonResponse({},status=401)
        return redirect(settings.LOGIN_URL)
    form=CreateTweetForm(request.POST or None)
    next_url=request.POST.get("next") or None
    if form.is_valid():
        obj=form.save(commit=False)
        obj.save()
        user=request.user
        if request.is_ajax():
            return JsonResponse(obj.serialize(),status=201)  #201 == created items 
        if next_url !=None and is_safe_url(next_url,ALLOWED_HOSTS):
            return redirect(next_url)
        form=CreateTweetForm()
    print(f'form.erros()---{form.errors}')
    if form.errors:
        if request.is_ajax():
            return JsonResponse(form.errors,status=400)
    return render(request,'components/forms.html',context={'form':form})
def tweet_detail_view_pure_django(request,tweet_id,*args,**kwargs):
    print("............views detail............")
    data={
        "id":tweet_id,
    }
    status=200
    try:
        obj=Tweet.objects.get(id=tweet_id)
        data['content']=obj.content
    except :
        data['message']='page not found'
        status=400    
    return JsonResponse(data,status=status)
    # return HttpResponse(f'list page {tweet_id}')
def tweet_list_view_pure_django(request,*args,**kwargs):
    print("............views list ............")
    obj=Tweet.objects.all()
    twee_list=[ a.serialize() for a in obj ]
    data={
        "resource":twee_list
    }
    return JsonResponse(data)
class Movie_Single_View(DetailView):
    template_name='components/singlepage.html'
    def get_object(self):
        id_=self.kwargs.get("id")
        print(",lpoplpo",id_)
        return get_object_or_404(Movies,id=id_)
def dynamic_look_up_view(request,id,*args,**kwargs):
    print("............views detail............")
    data={
        "id":id,
    }
    status=200
    try:
        obj=Movies.objects.get(id=id)
        data={
            'moviename':obj.moviename,
            'imagename':obj.imagename,
            'moviecontext':obj.moviecontext,
            'hallname':obj.hallname,
            'locationname':obj.locationname
            }
       
    except :
        data['message']='page not found'
        status=400    
    
    return JsonResponse(data,status=status)
def seat_booking_page_view(request,*args,**kwargs):
    items={'Hyderabad','Delhi'}
    context = {'items': items}
    context['loop_times'] = range(1, 31)
   
    return render(request,'components/seatbooking.html',context)