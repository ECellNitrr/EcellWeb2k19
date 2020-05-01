from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Startup
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