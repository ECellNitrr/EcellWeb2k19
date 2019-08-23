from django.contrib import admin
from .models import *

admin.site.register(Question)
admin.site.register(Questionset)
admin.site.register(Answer)
admin.site.register(RightAnswer)
admin.site.register(Option)
admin.site.register(Leader)
admin.site.register(ActivateQuiz)
admin.site.register(QuestionAcknowledge)