from django.contrib import admin
from django.urls import path
from core import views


urlpatterns = [
    path('', views.index, name='home'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('sendmail', views.sendmail, name='sendmail'),
    path('resume', views.resume, name='resume'),
    path('service', views.service, name='service'),
]