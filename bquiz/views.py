from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Question, Questionset, Answer, Option, Leader, ActivateQuiz, QuestionAcknowledge
from users.models import CustomUser
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from decorators import ecell_user
from .serializers import UserLeaderBoardSerializer,LeaderSerializer
import json
from rest_framework.response import Response
from rest_framework import status


from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


@api_view(['POST'])
@ecell_user
def submit_answer(request):
    print(request.data)
    question_id = request.data.get('question_id')
    answer_id = request.data.get('answer_id')
    time = request.data.get('time')
    score = request.data.get('score')
    try:
        question = Question.objects.get(id=question_id) 
    except:
        msg = "Wrong Question Id!"
    else:
        question_acknowledge = QuestionAcknowledge(user=request.ecelluser, question=question)
        question_acknowledge.save()
        if answer_id!=0:        
            answer = Option.objects.get(id=answer_id)
            answer = Answer(question=question, option=answer, user=request.ecelluser)
            answer.save()
        leader = Leader.objects.get(user=request.ecelluser, questionset=question.set)
        leader.score += score
        leader.save()
        request.ecelluser.bquiz_score += score
        request.ecelluser.save()
        msg = "Answer evaluated successfully"
        tot_score = request.ecelluser.bquiz_score
    # async_to_sync(channel_layer.group_send)(
    #     "bquiz",{
    #         'score':score,
    #         'bonus':bonus,
    #         'total_score':tot_score,
    #         'message':msg
    #     }
    # )

    return Response({
        'score':score,
        'total_score':request.ecelluser.bquiz_score,
        'message':msg
    }, status=status.HTTP_200_OK)
    

@api_view(['GET'])
def get_daily_leaderboard(request):
    try:
        questionset = Questionset.objects.get(flag=True)
        leaderboard = Leader.objects.filter(questionset=questionset).order_by('-score')
        leaderboard = LeaderSerializer(leaderboard, many=True).data
    except:
        return Response({
            'message':'Error Fetching Leaderboard!',
        }, status=status.HTTP_404_NOT_FOUND)

    return Response({
        'message':'Leaderboard Fetched Successfully!',
        'data':leaderboard
    }, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_leaderboard(request):
    try:
        users = CustomUser.objects.filter(bquiz_score>0).order_by('-bquiz_score')
        leaderboard = UserLeaderBoardSerializer(users, many=True)
    except:
        return Response({
            'message':'Error Fetching Leaderboard!',
        }, status=status.HTTP_404_NOT_FOUND)

    return Response({
        'message':'Leaderboard Fetched Successfully!',
        'data':leaderboard
    }, status=status.HTTP_200_OK)
    
@api_view(['GET'])
@ecell_user
def is_bquiz_active(request):
    activate = ActivateQuiz.objects.all()
    loc_flag = False
    for act in activate:
        if act.active:
            questionset = act.questionset
            loc_flag = True
            break
    if loc_flag:
        user = request.ecelluser
        try:
            leader = Leader.objects.get(user=request.ecelluser, questionset=questionset)
        except:
            leader = Leader(user=request.ecelluser, questionset=questionset)
            leader.save()
        else:
            pass

    return Response({
        'live':loc_flag
    }, status=status.HTTP_200_OK)