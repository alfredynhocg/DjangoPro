from __future__ import absolute_import

import os
from celery import Celery
from django.conf import settings
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE","settings.config.development")

app = Celery("settings.config")

app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda:settings.INSTALLED_APPS)