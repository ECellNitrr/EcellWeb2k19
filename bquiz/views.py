from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Question, Questionset, Answer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from decorators import ecell_user
import json


@api_view(['GET'])
@ecell_user
def submit_answer(request):
    question_id = request.data.get('question_id')
    answer_id = request.data.get('answer_id')
    time = request.data.get('time')
    score = 0
    bonus = 0
    try:
        question = Question.objects.get(id=question_id)
        answer = Option.objects.get(id=answer_id) 
        leader = Leader.objects.filter(user=request.ecelluser, questionset=question.set)
        if len(leader) == 0:
            leader = Leader(user=request.ecelluser, questionset=question.set)
            leader.save()
        if question.right_answer[0]==answer:
            score = question.score
            bonus = time
        leader.score += (score+bonus)
        request.ecelluser.bquiz_score += (score+bonus)
        request.ecelluser.save()
    except:
        msg = "Wrong Question/Answer Id!"
    answer = Answer(question=question, answer=answer, user=request.ecelluser)
    answer.save()

    return Response({
        'user_id':request.ecelluser.id,
        'score':score,
        'bonus':bonus,
        'total_score':request.ecelluser.bquiz_score
    }, status=status.HTTP_200_OK)
    

@api_view(['GET'])
def get_daily_leaderboard(request):
    try:
        questionset = request.data.get('question_set')
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