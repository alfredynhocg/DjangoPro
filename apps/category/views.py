from django.urls import reverse
from django.utils import timezone
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import Categoria
from django.contrib.messages.views import SuccessMessageMixin 

class CategoriaListView(ListView):

    model = Categoria
    paginate_by = 20
    
    def get_context_data(self, **kwargs):
        print("INGRESANDO A LA VISTA DE LISTAR CATEGORIAS")
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
    
class CategoriaCreateView(SuccessMessageMixin, CreateView):
    model = Categoria # con que tabla se trabajara
    form = Categoria # crea el formulario del modelo
    template_name = 'category/crear_categoria.html' # renderizar en la plantilla
    fields = '__all__' # campos para el formulario
    success_message = 'CREADO' # Mostramos este Mensaje luego de Crear

    def get_success_url(self):        
        return reverse('category:listar-cat')
        
        
class CategoriaUpdateView(SuccessMessageMixin, UpdateView):
    model = Categoria # con que tabla se trabajara
    form = Categoria # crea el formulario del modelo
    template_name = 'category/modificar_categoria.html' # renderizar en la plantilla
    fields = '__all__' # campos para el formulario
    success_message = 'Modificado Correctamente !' # Mostramos este Mensaje luego de Crear

    def get_success_url(self):
        return reverse('category:listar-cat')

class CategoriaEliminarView(SuccessMessageMixin,DeleteView):
    model = Categoria
    form = Categoria
    fields = '__all__'
    template_name = 'category/eliminar_categoria.html'
    success_message = 'Eliminado Correctamente !' # Mostramos este Mensaje luego de Crear

    def get_success_url(self):
        return reverse('category:listar-cat')
    