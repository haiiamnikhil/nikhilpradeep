from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.parsers import JSONParser


def projectsList(request):
    if request.method == 'GET':
        projects = Projects.objects.all()
        serializer = ProjectSerializer(projects,many=True)

        return JsonResponse({'status':True,'data':serializer.data},safe=False,status=200)


@csrf_exempt
def projectDetails(request,projectname):
    if request.method == 'POST':
        project = Projects.objects.filter(slug=projectname)
        serializer = ProjectDetailsSerializer(project,many=True)

        tags = ProjectTech.objects.filter(projectName=serializer.data[0]['id'])
        tagSerializer = TagSerializer(tags,many=True)

        return JsonResponse({'status':True,'data':serializer.data,'tech':tagSerializer.data},safe=False,status=200)
    
    return render(request,'projectsdeatils.html')


def latestProject(request):
    if request.method == 'GET':
        projects = Projects.objects.order_by('-uploadedDate')[:3]
        serializer = LatestProjects(projects,many=True)

        return JsonResponse({'status':True,'data':serializer.data},status=200,safe=False)

@csrf_exempt
def contact(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        
        try:
            contact = Contact.objects.create(
                firstName=data['firstName'], lastName=data['lastName'],emailId=data['email'],message=data['message'])
            return JsonResponse({'status':True,'message':'Form Submitted SuccesFully'},safe=False, status=200)

        except:
            return JsonResponse({'status':False,'message':'There was an Error on Submiting Form. Please try again or after Sometime'},safe=False, status=200)


def about(request):
    if request.method == 'GET':
        aboutme = Aboutme.objects.all()
        aboutmeSerializer = AboutmeSerializer(aboutme,many=True)

        education = Education.objects.all()
        educationSerializer = EducationSerializer(education,many=True)

        experience = Experiences.objects.all()
        experienceSerializer = ExperienceSerializer(experience,many=True)

        certification = Certification.objects.all()
        certificationSerializer = CertificationSerializer(certification,many=True)

        skills = Skills.objects.all()
        skillsSerializer = SkillsSerializer(skills,many=True)

        return JsonResponse({'status':True,
        'about':aboutmeSerializer.data, 'education':educationSerializer.data , 'experience':experienceSerializer.data,
        'certification':certificationSerializer.data, 'skills':skillsSerializer.data})


def servicesList(request):
    if request.method == 'GET':
        services = Services.objects.all()
        serializer = ServiceSerializer(services,many=True)
        return JsonResponse({'status':True,'data':serializer.data},safe=False,status=200)


@csrf_exempt
def servicesDetails(request,servicename):
    if request.method == 'POST':
        service = Services.objects.filter(slug=servicename)
        serializer = ServiceSerializer(service,many=True)

        return JsonResponse({'status':True,'data':serializer.data},safe=True,status=200)

    return render(request,'servicesDetails.html')