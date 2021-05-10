from django.contrib.sitemaps import Sitemap
from .models import *
from django.urls import reverse

class ProjectsSitemap(Sitemap):
    def items(self):
        return Projects.objects.all()

class StaticViewSitemap(Sitemap):
    def items(self):
        return ['homeView','projectsView']

    def location(self, items):
        return reverse(items)

class ServiceDetailsSitemap(Sitemap):
    def items(self):
        return Services.objects.all()