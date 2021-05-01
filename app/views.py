from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import *
from .serializers import *
from django.http import JsonResponse


@csrf_exempt
def projectDetails(request,projectname):
    if request.method == 'POST':
        project = Projects.objects.filter(slug=projectname)
        serializer = ProjectSerializer(project,many=True)

        tags = ProjectTech.objects.filter(projectName=serializer.data[0]['id'])
        tagSerializer = TagSerializer(tags,many=True)

        return JsonResponse({'status':True,'data':serializer.data,'tech':tagSerializer.data},safe=False,status=200)
    
    return render(request,'projectsdeatils.html')


def latestProject(request):
    if request.method == 'GET':
        projects = Projects.objects.order_by('-uploadedDate')[:1]
        print(projects)
        serializer = LatestProjects(projects,many=True)
        print(serializer.data)
        return JsonResponse({'status':True,'data':serializer.data},status=200,safe=False)
