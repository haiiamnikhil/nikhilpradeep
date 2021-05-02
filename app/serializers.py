from rest_framework import serializers
from .models import *


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'
 

class ProjectDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'


class LatestProjects(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ['slug','projectName','projectMeta','projectGithub']


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTech
        fields = '__all__'