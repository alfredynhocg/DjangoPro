from django.urls import path
from .views import HomeView, LandingView,BlogView, BlogDetailView, ContactView ,PostView, PostDetailView

urlpatterns = [
    path('', LandingView.as_view(), name='view-landing'),
    path('dashboard/', HomeView.as_view(), name='view-dashboard'),
    path('detalle-blog:<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
    path('blog/', BlogView.as_view(), name='view-blog'),
    path('publicaciones/', PostView.as_view(), name='view-post'),
    path('detalle-post:<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('contactos',ContactView.as_view(),name='view-contact'),
    
]   