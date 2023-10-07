import os

from os.path import join, dirname

PROJECT_PATH = dirname(dirname(dirname(__file__)))
APP_DIRS = join(PROJECT_PATH, 'apps')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = '^yca(aci2@wf_hp(a=8#ple1+45+yqzy7tfx)c4g&8=woad1$b'

# Librerias propias del sistema
DJANGO_APPS = (
    'admin_interface',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'colorfield',
)

# librerias de Terceros -> librerias de las comunidades
THIRD_PARTY_APPS = (
    'rest_framework',
    'constance',
    'import_export',  
    'django_seed',
    'drf_yasg',
    'django_extensions',
)

# Librerias y funcionadalidades propias
LOCAL_APPS = (
    'apps.post',
    'apps.product',
    'apps.category',  
    'apps.agente',
)

# AUTH_USER_MODEL = 'users.User' 

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'settings.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            join(APP_DIRS, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

FACEBOOK_VERIFY_TOKEN = 'token'

WSGI_APPLICATION = 'settings.wsgi.application'


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

DEFAULT_AUTHENTICATION_CLASSES= (
    'rest_framework.authentication.SessionAuthentication',
    'rest_framework.authentication.BasicAuthentication'
),

# Django Cache
# CACHES = {
#     'default': {
#         'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
#         'LOCATION': '127.0.0.1:11211',
#     }
# }

LANGUAGE_CODE = 'es-BO'

TIME_ZONE = 'America/La_Paz'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# SETTINGS PROJECTS
PROJECT_NAME = "OpenBackend"
PROJECT_MANEGER = "@alfredynho"
PROJECT_DOMAIN ="https://alfredynho.github.io/"
MANEGER_NAME = "Alfredo Callizaya Gutierrez"
EMAIL_MANAGER = "alfredynho.cg@gmail.com"

LOGIN_URL = "/dashboard/"