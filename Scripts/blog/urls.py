from django.urls import path
from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView,
)

app_name='templates'
urlpatterns=[
    path('create/',ArticleCreateView.as_view(),name='article-create'),
    path('',ArticleListView.as_view(),name='article-list'),
    path('<int:my>/',ArticleDetailView.as_view(),name='article-detail'),
    path('<int:my>/',ArticleDetailView.as_view(),name='article-d'),
    path('<int:my>/update/',ArticleUpdateView.as_view(),name='article-update'),
    path('<int:my>/delete/',ArticleDeleteView.as_view(),name='article-delete'),
]
