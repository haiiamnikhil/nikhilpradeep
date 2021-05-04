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
    uploadedDate = models.DateField(auto_now=True)
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


class Contact(models.Model):
    firstName =  models.CharField(max_length=50,unique=False,null=True,blank=False)
    lastName = models.CharField(max_length=50,unique=False,null=True,blank=False)
    emailId = models.EmailField(blank=False,null=True,unique=False)
    message = models.TextField(max_length=500,blank=False,null=True)
    addedDate = models.DateField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Contact'

    def __str__(self):
        return str(self.firstName + ' ' + self.lastName)


class Aboutme(models.Model):
    heading = models.CharField(max_length=50,unique=False,null=True,blank=False)
    description = models.TextField(max_length=500,blank=False,null=True)

    class Meta:
        verbose_name_plural = 'About Me'

    def __str__(self):
        return str(self.heading)


class Education(models.Model):
    levelOfEducation = models.CharField(max_length=50,unique=False,null=True,blank=False)
    stream = models.CharField(max_length=100,unique=True,blank=False,null=True)
    university = models.CharField(max_length=100,unique=True,null=True,blank=False)
    startedYear = models.CharField(max_length=10,blank=False,null=True)
    endYear = models.CharField(max_length=10,blank=False,null=True)

    class Meta:
        verbose_name_plural = 'Education Qualifications'

    def __str__(self):
        return self.levelOfEducation


class Experiences(models.Model):
    designation = models.CharField(max_length=100,unique=False,null=True,blank=False)
    companyName = models.CharField(max_length=50,unique=True,null=True,blank=False)
    startedYear = models.DateField(auto_now_add=False)
    presentWorking = models.BooleanField(default=True)
    endYear = models.DateField(auto_now_add=False, null=True,blank=True)

    class Meta:
        verbose_name_plural = 'Work Experience'

    def __str__(self):
        return self.designation


class Certification(models.Model):
    organisation = models.CharField(max_length=50,unique=False,null=True,blank=False)
    cource = models.TextField(max_length=500,unique=False,null=True,blank=False)
    certificateNumber = models.CharField(max_length=50,blank=True,null=True)
    certififedYear = models.DateField(auto_now_add=False,blank=True,null=True)
    certififcationExpiry = models.DateField(auto_now_add=False,null=True,blank=True)

    class Meta:
        verbose_name_plural = 'Certifications'

    def __str__(self):
        return self.organisation


class Skills(models.Model):
    heading = models.CharField(max_length=100,unique=True,null=True,blank=False)
    description = models.TextField(max_length=500,null=True,blank=False)

    class Meta:
        verbose_name_plural = 'Skills'

    def __str__(self):
        return self.heading


class Services(models.Model):
    slug = models.CharField(max_length=100,unique=True,null=True,blank=False)
    heading = models.CharField(max_length=50, unique=True,null=True,blank=False)
    servicesMetta = models.TextField(max_length=256,null=True,blank=False)
    description = models.TextField(max_length=500,blank=False,null=True)
    bannerImage = models.FileField(upload_to="Static-Images/",null=True,blank=True)

    class Meta:
        verbose_name_plural = 'Services'

    def __str__(self):
        return self.heading