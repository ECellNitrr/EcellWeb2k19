from django.db import models
from users.models import CustomUser


class Startup(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    contact = models.CharField(max_length=15)
    brief = models.CharField(max_length=256)
    description = models.TextField(blank=True)
    sector = models.CharField(max_length=100)
    
    address1 = models.CharField(max_length=200)
    address2 = models.CharField(max_length=200)
    district = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    approved = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name 

    
class Founder(models.Model):
    startup = models.ForeignKey(Startup,on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    email = models.EmailField()
    contact = models.CharField(max_length=15, blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return self.name 


class StartupLogo(models.Model):
    startup = models.OneToOneField(Startup,on_delete=models.CASCADE)

    logo = models.ImageField(upload_to='static/uploads/iportal/logos/')

    def __str__(self):
        return self.startup.name 


class Job(models.Model):
    job_type_choices = (
        ('Internship','Internship'),
        ('Internship with job offer','Internship with job offer'),
        ('Full time employee', 'Full time employee'),
        ('Parttime','Parttime'),
        ('Freelance','Freelance'),
    )
    
    startup = models.ForeignKey(Startup,on_delete=models.CASCADE)

    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    start_date = models.DateTimeField()
    duration = models.CharField(max_length=200)
    job_type = models.CharField(max_length=200, choices=job_type_choices)

    about_the_job = models.TextField()
    no_of_opening = models.IntegerField()
    skills_required = models.TextField()
    who_can_apply = models.TextField()
    perks = models.TextField(blank=True)

    stipend = models.IntegerField()
    apply_by = models.DateTimeField()
    posted_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name 

        

class JobApplication(models.Model):
    application_status_choices = (
        ('PND','pending'),
        ('RJD','rejected'),
        ('HRD','hired'),
        ('URV', 'Under Review'),
    )

    job = models.ForeignKey(Job,on_delete=models.CASCADE)
    applicant = models.ForeignKey(CustomUser,on_delete=models.CASCADE)


    status = models.CharField(max_length=100, choices=application_status_choices, default='pending')
    # Why should you be hired list u relevant skills
    ques1 = models.TextField()
    # r u available mentioned duration of the job
    ques2 = models.TextField()
    resume = models.FileField(upload_to='static/uploads/iportal/resumes/')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('job', 'applicant',)

    def __str__(self):
        return self.job.name + ' ' + self.applicant.name 

