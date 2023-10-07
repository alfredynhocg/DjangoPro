from argparse import Namespace
from django.contrib import admin
from django.urls import include, path
from django.contrib import admin
from django.views.generic import TemplateView
from django.views.static import serve
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, re_path
import debug_toolbar
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# from django.contrib.auth.views import (
#         login, 
#         logout_then_login, 
#         password_reset, 
#         password_reset_done, 
#         password_reset_confirm, 
#         password_reset_complete
#     )

schema_view = get_schema_view(
   openapi.Info(
      title="DevDjango API",
      default_version='v1',
      description="API Django",
      terms_of_service="https://alfredynho.github.io",
      contact=openapi.Contact(email="alfredynho.cg@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
)

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^', include(('apps.home.urls','index'),namespace='index')),
    re_path(r'^', include(('apps.category.urls','category'),namespace='category')),
    #re_path(r'^', include(('apps.product.urls','product'),namespace='product')),
    re_path(r'^', include(('apps.post.urls','post'),namespace='post')),
    re_path(r'^api/', include(('apps.agente.api','api-agente'),namespace='api')),
    re_path(r'^api/', include(('apps.category.api','api-category'),namespace='api')),
    re_path(r'^api/', include(('apps.product.api','api-product'),namespace='api')),
    re_path(r'^api/', include(('apps.product.urls','api-reporte'),namespace='api')),
    re_path(r'^docs/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redocs/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    import debug_toolbar

    urlpatterns +=(
        re_path(r'^__debug__/', include(debug_toolbar.urls)),
    )