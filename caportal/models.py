from django.db import models
from users.models import CustomUser 


class Task(models.Model):
    platform_choices = [
        ['facebook','facebook'],
        ['linkedin','linkedin'],
        ['whatsapp','whatsapp'],
        ['youtube','youtube'],
        ['instagram','instagram'],
        ['twitter','twitter'],
    ]

    name = models.CharField(max_length=500)
    description = models.TextField(blank=True)
    platform = models.CharField(max_length=100, choices=platform_choices)
    madeby = models.CharField(max_length=500)
    url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class SubmitTask(models.Model):
    review_status = [
        ['pending','pending'],
        ['accepted','accepted'],
        ['rejected','rejected']
    ]
    
    task = models.ForeignKey(Task,on_delete=models.CASCADE)
    proof_by = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    proof_checker = models.CharField(max_length=500,blank=True)
    proof_pic = models.ImageField(upload_to='static/uploads/caportal/')
    status =  models.CharField(max_length=500, choices=review_status, default='pending')
    msg = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = [['task','proof_by']]


    def __str__(self):
        return '{} {}'.format(self.task.name, self.proof_by.email)