from django.db import models
from users.models import CustomUser

class ActivateQuiz(models.Model):
    questionset = models.OneToOneField('Questionset', on_delete=models.CASCADE)
    active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)
    
class Questionset(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    set_no = models.IntegerField()
    meta = models.ImageField(upload_to='static/uploads/bquiz/questionset')
    flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.flag is True:
            if Questionset.objects.filter(flag=True).exists():
                questionsets = Questionset.objects.filter(flag=True)
                for questionset in questionsets:
                    questionset.flag = False
                    questionset.save()
            self.flag = True
        super(Questionset, self).save(*args, **kwargs)
        
        try:
            curr_activate = ActivateQuiz.objects.get(questionset=self)
        except:
            activatequiz = ActivateQuiz()
            activatequiz.questionset = self
            activatequiz.save()
        else:
            pass

class Question(models.Model):
    CHOICES = (
        ('IMG', 'Image Question'),
        ('TXT', 'Text Question')
    )
    question = models.TextField()
    description = models.TextField()
    meta = models.ImageField(upload_to='static/uploads/bquiz/question', null=True, blank=True)
    time_limit = models.IntegerField()
    score = models.IntegerField()
    type = models.CharField(max_length=4, choices=CHOICES, default='TXT')
    set = models.ForeignKey(Questionset,on_delete=models.CASCADE)
    flag = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.question

    def save(self, *args, **kwargs):
        if self.flag is True:
            if Question.objects.filter(flag=True).exists():
                questions = Question.objects.filter(flag=True)
                for question in questions:
                    question.flag = False
                    question.save()
            self.flag = True
        super(Question, self).save(*args, **kwargs)

class QuestionAcknowledge(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return str(str(self.user) + " => " + str(self.question))

class Option(models.Model):

    option = models.CharField(max_length=40, null=False, blank=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return str(str(self.question.question) + " => " + self.option)

class Setting(models.Model):
    # Codes for B-Quiz Status checking messages
    CHOICES = (
        ('OFF', 'B-Quiz not active'),
        ('ANS', 'Answer submitted'),
        ('NAN', 'Not answered'),
        ('ON', 'B-Quiz is live')
    )
    key = models.CharField(max_length=3, null=False, blank=False, choices=CHOICES)
    text = models.CharField(max_length=100, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return str(self.key)

class Answer(models.Model):
    question = models.ForeignKey(Question,on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __int__(self):
        return self.answer

class RightAnswer(models.Model):
    question = models.OneToOneField(Question, related_name='right_answer',on_delete=models.CASCADE)
    right_option = models.ForeignKey(Option,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

class Leader(models.Model):
    questionset = models.ForeignKey(Questionset,on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)
    