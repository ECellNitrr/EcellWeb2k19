from django.db import models

# Create your models here.

MEMBER_TYPE = (
        ('DIR', 'Director, NIT Raipur'),
        ('HCD', 'Head of Career development'),
        ('FCT','Faculty Incharge'),
        ('MNG', 'Manager'),
        ('HCO', 'Head Co-ordinator'),
        ('OCO', 'Overall Co-ordinator'),
        ('EXC', 'Executive'),
    )

class Member(models.Model):
    name = models.CharField(max_length=100)
    profile_url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='static/uploads/team', null=True, blank = True)
    member_type = models.CharField(max_length=3, choices= MEMBER_TYPE, default='EXEC')

    def __str__(self):
        return self.member_type + '-' + self.name