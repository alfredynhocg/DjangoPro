from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView, View, ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.messages.views import SuccessMessageMixin 

from .models import Post

class PostListView(ListView):
    template_name = 'post/listar_post.html'
    model = Post
    
class PostCreateView(SuccessMessageMixin,CreateView):
    model = Post
    form = Post
    fields = '__all__'
    template_name = 'post/crear_post.html'
    success_message = 'Post Creado Correctamente !' # Mostramos este Mensaje luego de Crear un Postre

    def get_success_url(self):        
        return reverse('post:listar-post')