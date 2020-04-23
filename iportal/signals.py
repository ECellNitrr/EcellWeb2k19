from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Startup
from .tasks import mail


@receiver(pre_save, sender=Startup)
def email_update_startup(sender, instance=None, **kwargs):
    previous = Startup.objects.get(id=instance.id)
    if instance.idea_approved!=previous.idea_approved:
        if instance.idea_approved:
            mail.delay('Idea Approved By CDC NIT Raipur','body',instance.email)
        else:
            print("bye")