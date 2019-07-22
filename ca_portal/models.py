from django.db import models
from users.models import CustomUser


class CA_Requests(models.Model):

    SOCIAL_TYPE = (
        ('FB', 'Facebook'),
        ('TW', 'Twitter'),
        ('LI', 'LinkedIn'),
        ('WP', 'Whatsapp'),
    )

    screenshot = models.ImageField(upload_to='uploads/caportal_screenshots/', null=False, blank=False)
    social_platform = models.CharField(max_length=2, choices=SOCIAL_TYPE)
    status_flag = models.IntegerField(default = 0)
    user = models.ForeignKey(CustomUser, related_name='requests', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.user.username + "'s ("+ self.social_platform +") Request"