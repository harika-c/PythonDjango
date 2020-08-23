from django.shortcuts import render
from django.views import  View
# Create your views here.

class CourseListView(View):

    def get(self,request,*args,**kwargs):
        template='create-course.html'
        context={
        }
        return render(request,template,context)
