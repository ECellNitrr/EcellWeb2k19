from django.contrib.auth.models import User
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from .models import Startup, JobApplication
from .tasks import mail
from django.template.loader import render_to_string


@receiver(pre_save, sender=Startup)
def email_update_startup(sender, instance=None, **kwargs):
    try:
        previous = Startup.objects.get(id=instance.id)
        subject='An Update from Career Development Cell NIT Raipur'

        if instance.idea_approved!=previous.idea_approved:
            if instance.idea_approved == 'approved':
                html_content=render_to_string('idea_approved_mail.html',{'startup_name': instance.name})
                mail.delay(subject,html_content,instance.email)
            elif instance.idea_approved == 'pending':
                html_content=render_to_string('idea_pending_mail.html',{'startup_name': instance.name})
                mail.delay(subject,html_content,instance.email)
            elif instance.idea_approved == 'rejected':
                html_content=render_to_string('idea_rejected_mail.html',{'startup_name': instance.name})
                mail.delay(subject,html_content,instance.email)
        elif instance.can_hire_interns!=previous.can_hire_interns:
            if instance.can_hire_interns:
                html_content=render_to_string('hire_intern_mail.html',{'startup_name': instance.name})
                mail.delay(subject,html_content,instance.email)
            else:
                html_content=render_to_string('revoke_hire_mail.html',{'startup_name': instance.name})
                mail.delay(subject,html_content,instance.email)
    except:
        pass

    
@receiver(pre_save, sender=JobApplication)
def job_application_status_update(sender, instance=None, **kwargs):
    try:
        previous_app = JobApplication.objects.get(id = instance.id)
        subject = 'Update Regarding your Internship Application' 
        if instance.status!=previous_app.status:
            if instance.status == 'RJD':
                html_content = render_to_string('PND_to_RJD.html',{'job_name' : instance.job.name , 'startup_name' : instance.job.startup.name})
                mail.delay(subject,html_content,instance.applicant.email)
            
            elif instance.status == 'HRD':
                html_content = render_to_string('PND_to_HRD.html',{'job_name' : instance.job.name , 'startup_name' : instance.job.startup.name})
                mail.delay(subject,html_content,instance.applicant.email)
            
            elif instance.status == 'URV':
                html_content = render_to_string('PND_to_URV.html',{'job_name' : instance.job.name , 'startup_name' : instance.job.startup.name})
                mail.delay(subject,html_content,instance.applicant.email)
    except:
        pass

@receiver(post_save, sender=JobApplication)
def user_created(sender, instance, created, *args, **kwargs):
    application = instance
    if created:
        subject_applicant ='Your internship application has been received!'
        html_content_applicant = render_to_string('Applicant_acknowledgement.html',{'job_name' : instance.job.name , 'startup_name' : instance.job.startup.name})
        mail.delay(subject_applicant,html_content_applicant,instance.applicant.email)
        
        subject_startup ='An application for your internship position has been received!'
        html_content_startup = render_to_string('startup_acknowledgement.html',{'job_name' : instance.job.name})
        mail.delay(subject_startup,html_content_startup,instance.job.startup.email)           
    else:
        pass