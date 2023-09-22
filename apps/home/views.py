from django.http import HttpResponseForbidden, HttpResponse
from django.views.generic import TemplateView, View, ListView
from django.views.generic.detail import DetailView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.template import RequestContext
from django.shortcuts import render
from django.conf import settings
from apps.category.models import Categoria
from apps.post.models import Post
from django.utils import timezone


class MenuMixin(object):

	def get_context_data(self, **kwargs):
		context = super(MenuMixin, self).get_context_data(**kwargs)
		context["menu"] = self.menu
		return context

class LandingView(ListView):
	template_name = "index.html"
	model = Categoria
 
class ContactView(TemplateView):
    template_name = "frontend/contacto.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context = {
            'PROJECT_NAME' : settings.PROJECT_NAME,
            'EMAIL_MANAGER': settings.EMAIL_MANAGER
            }
        return context


class BlogView(ListView):
    
	template_name = "frontend/blog.html"
	model = Categoria
	paginate_by = 4
 
class PostView(ListView):
    
    template_name = 'frontend/post.html'
    model = Post
    paginate_by = 4
    
class PostDetailView(DetailView):

    model = Post
    template_name = "frontend/detalle_post.html"
 
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
 
 
class BlogDetailView(DetailView):

    model = Categoria
    template_name = "frontend/detalle_blog.html"
 
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
    

class HomeView(MenuMixin, TemplateView):
	template_name = "dashboard/index.html"
	menu = 'dashboard'

	def get_context_data(self, **kwargs):
		context = super().get_context_data(**kwargs)
		context = {
			'PROJECT_NAME' : 'BlogDjango',
			'EMAIL_MANAGER': settings.EMAIL_MANAGER
			}

		return context


class Login(TemplateView):

	def get(self,request,*args,**kwargs):
		if request.user.is_authenticated and not request.user.is_staff:
			return self.get_user_template(request)
		else:
			context = {'message':'Debes tener iniciada tu sesion'}
			return render(request, 'start/login.html', context)


	def post(self,request,*args,**kwargs):
		username = request.POST.get('username')
		password = request.POST.get('password')

		user = authenticate(username=username,password=password)

		if user is not None:
			if user.is_active:
				login(request,user)
				return self.get_user_template(request)
			else:
				context = {'message':'Su usuario no esta activo'}
				return render(request, 'start/login.html',context)
		else:
			context = {'message':'Usuario o contraseña invalido'}
			return render(request, 'start/login.html',context)


	def get_user_template(self,request):

		context = {}

		return render(request,'dashboard/index.html',context)


class Logout(TemplateView):

	def dispatch(self,request,*args,**kwargs):
		logout(request)
		context = {}
		return render(request, 'start/login.html',context)
