from django.db import models


class Projects(models.Model):
    slug = models.CharField(max_length=100,unique=True,blank=False,null=True)
    projectHeading = models.CharField(max_length=100,unique=True,null=True,blank=False)
    projectTagline = models.CharField(max_length=100,unique=True,null=True,blank=False)
    projectName = models.CharField(max_length=50,unique=True,null=True,blank=False)
    projectMeta = models.CharField(max_length=250,unique=True,null=True,blank=False)
    projectDescription = models.TextField(max_length=500,blank=False,null=True)
    projectThumpnailImage = models.FileField(upload_to='Images/Project/Thumpnails/',null=True)
    projectDetailsImage = models.FileField(upload_to='Images/Project/Details/',null=True)
    projectGithub = models.URLField(max_length=200,unique=False,null=True,blank=False)
    uploadedDate = models.DateField(auto_now_add=True)
    updatedDate  = models.DateField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Projects'

    def __str__(self):
        return str(self.projectName)

class ProjectTech(models.Model):
    projectName = models.ForeignKey(Projects,on_delete=models.CASCADE,null=True)
    techName = models.CharField(max_length=50,unique=False,null=True,blank=False)
    techIcon = models.FileField(upload_to='Icons/Projects/',null=True,blank=False)

    class Meta:
        verbose_name_plural = 'Project Technologies'

    def __str__(self):
        return str(self.techName)
