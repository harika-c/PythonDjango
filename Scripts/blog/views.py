from django.shortcuts import render,get_object_or_404
from .models import Article
from django.urls import reverse

from django.views.generic import (
    ListView,
    DeleteView,
    CreateView,
    UpdateView,
    DetailView
    )
from .forms import ArticleModelForm
class ArticleListView(ListView):
    template_name = 'article_list.html'
    queryset=Article.objects.all()
class ArticleDetailView(DetailView):
    template_name = 'article_detail.html'
    queryset=Article.objects.all()
    # queryset = Article.objects.filter(id__gt=2)
    def get_object(self):
        id_=self.kwargs.get("my")
        return get_object_or_404(Article,id=id_)
class ArticleCreateView(CreateView):
    template_name = 'article_create.html'
    form_class = ArticleModelForm
    queryset = Article.objects.all()
    # success_url = '/blog'
    def form_valid(self, form):
        print(form.cleaned_data)
        print(f'.........{super().form_valid(form)}')
        return super().form_valid(form)
    def get_success_url(self):
        return '/blog'
class ArticleUpdateView(UpdateView):
    template_name = 'article_create.html'
    form_class = ArticleModelForm
    queryset = Article.objects.all()
    def get_object(self):
        id_=self.kwargs.get('my')
        return get_object_or_404(Article,id=id_)
    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)
class ArticleDeleteView(DeleteView):
    template_name = 'article_delete.html'
    def get_object(self):
        id_ = self.kwargs.get('my')
        print(f",,,,111..//....{self.kwargs}")
        return get_object_or_404(Article, id=id_)