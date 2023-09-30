from .common import *
from .constance import *
from celery.schedules import crontab


DEBUG = True
ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'q',
        'USER': 'root',
        'PASSWORD': '',
        'PORT': '3306'
    }
}

# CONFIGURATION MEDIA
MEDIA_ROOT = join(PROJECT_PATH, 'public/media')
MEDIA_URL = '/media/'

#CONFIGUTATION STATICS
STATIC_ROOT = os.path.join(PROJECT_PATH, 'public/static')
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(PROJECT_PATH,'static'),
)


INTERNAL_IPS = ['127.0.0.1', 'localhost','*']
ALLOWED_HOSTS += INTERNAL_IPS
INSTALLED_APPS += ('debug_toolbar', )
MIDDLEWARE.append('debug_toolbar.middleware.DebugToolbarMiddleware')

# 
# CELERY_BEAT_SCHEDULE = {
    # 'task_number_one':{
        # 'task':'openbackend.apps.messenger.tasks.test',
        # 'schedule':crontab()
    # }
# }
