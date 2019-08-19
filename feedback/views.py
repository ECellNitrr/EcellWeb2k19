from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import FeedbackSerializer
from rest_framework import status

# Create your views here.
@api_view(['POST',])
def feedback(request):
    f = FeedbackSerializer(data=request.data)

    try:
        f.is_valid(raise_exception=True)
    except Exception as e:
        error = f.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field: "+str(err)+"- "+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        f.save()
        res_message = "Feedback Posted Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)

