from django.urls import path
from .views import CourseListView


urlpatterns=[
        path('',CourseListView.as_view(template_name='forest.html'),name='list-course'),
]