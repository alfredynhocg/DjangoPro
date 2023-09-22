#  production.py
from .common import *
DEBUG = False
ALLOWED_HOSTS = ['alfredynho']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'usm_app',
        'USER': 'usm_user',
        'PASSWORD': 'XXXYYYZZZ',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}


# CONFIGURATION MEDIA
MEDIA_ROOT = join(PROJECT_PATH, 'public/media')
MEDIA_URL = '/media/'

#CONFIGUTATION STATICS
STATIC_ROOT = os.path.join(BASE_DIR, 'public/static')
STATIC_URL = '/alfredynho.site.com/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR,'static'),
)