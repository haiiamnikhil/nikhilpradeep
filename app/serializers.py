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


class AboutmeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aboutme
        fields = ['description']
    
class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiences
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'

class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = '__all__'