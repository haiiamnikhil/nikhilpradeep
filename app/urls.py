from django.urls import path
from .views import *
from django.views.generic import TemplateView

urlpatterns = [
    path('',TemplateView.as_view(template_name="home.html"),name="homeView"),
    path('projects/',TemplateView.as_view(template_name="projects.html"),name="projectsView"),
    path('projects/<str:projectname>/',projectDetails,name="projectsDetails"),
    path('api/latest-projects/',latestProject,name="latestProjectView"),
    path('api/list-projects/',projectsList,name="projectsList"),

    path('api/contact-details/',contact,name="contactDetails"),

    path('api/about/',about,name="about"),

    path('api/list-services/',servicesList, name="servicesList"),
    path('service/<str:servicename>/',servicesDetails,name="servicesDetails"),
]