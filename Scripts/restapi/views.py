from django.shortcuts import render
from .models import Rest
from json import dumps,loads
from django.http import HttpResponse
from .models import Rest
def restsample(request,apiid):
    rest=Rest.objects.get(id=apiid)
    print(f';;;///......{rest.name}')
    i=0
    s1={}
    for aa in Rest.objects.all():
        sample_data={
        aa.name:aa.context
        }
        s1.update({i:sample_data})
        i+=1
    print(s1.get(2))
    json_data=dumps(s1)
    return HttpResponse(json_data,content_type='application/json')
