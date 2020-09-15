from django.shortcuts import render,redirect
from django.conf import settings
from random import randint
from django.http import HttpResponse,Http404,JsonResponse
from django.utils.http import is_safe_url
from .models import Tweet
from .forms import CreateTweetForm
from .serializers import TweetSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


ALLOWED_HOSTS=settings.ALLOWED_HOSTS
user=settings.AUTH_USER_MODEL

def home_view(request,*args,**kwargs):
    print("............views home ............")
    return render(request,'pages/home.html',{})

@api_view(['POST'])
def tweet_create_view(request,*args,**kwargs):
    print(f"............views create .....{request}.......")
    serializer=TweetSerializer(data=request.POST or None)
    print(f".////..{serializer.is_valid(raise_exception=True)}")
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        print(f'..,,,{serializer}')
        return Response(serializer.data)
    return Response({},status=400)

@api_view(['GET'])
def tweet_list_view(request,*args,**kwargs):
    print("............views list ............")
    obj=Tweet.objects.all()
    serializer=TweetSerializer(obj,many=True)
    return Response(serializer.data)
@api_view(['GET'])    
def tweet_detail_view(request,tweet_id,*args,**kwargs):
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