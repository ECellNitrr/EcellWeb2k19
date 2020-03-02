from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Event, EventRegister
from .serializers import *
from decorators import ecell_user,relax_ecell_user
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# from django.utils.six.moves.urllib.parse import urlsplit
import csv


@api_view(['GET', ])
def get_events(request, year):
    # print(request.META['SERVER_PROTOCOL'])
    res_message = ""
    res_status = ""
    res_data = []
    # scheme = urlsplit(request.build_absolute_uri(None)).scheme
    # print(scheme)
    events = Event.objects.filter(year=year, flag=True)
    if len(events) > 0:
        res_data = EventListSerializer(
            events, many=True, context={
                'request': request}).data
        res_message = "Events Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Events Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def event_register(request, id):
    eventregister = EventRegister()
    user = request.ecelluser
    res_status = status.HTTP_401_UNAUTHORIZED
    if user.verified:
        eventregister.user = user
        try:
            eventregister.event = Event.objects.get(id=id)
        except:
            res_message="Registration Failed. Event does not exist."
            res_status=status.HTTP_404_NOT_FOUND
            
        else:
            eventregister.save()
            res_message= "Registration Successful"
            res_status=status.HTTP_200_OK
    else:
        res_message = "You need to verify your account to register for an event"
    return Response({
        "message": res_message
    }, status=res_status)
@api_view(['POST', ])
@ecell_user
def event_unregister(request, id):
    u = request.ecelluser
    if u:
        try:
            e = Event.objects.get(id=id)
        except:
            res_message="Event does not exist"
            res_status=status.HTTP_404_NOT_FOUND   
        else:
            try:
                reg = EventRegister.objects.filter(user = u, event= e)  
            except:
                res_message= "Event not registered"
                res_status=status.HTTP_404_NOT_FOUND
            else:
                res_message="Registration deleted successfully"
                reg.delete()
                res_status=status.HTTP_200_OK
    
    else:
        res_message = "Login to continue"
    return Response({
        "message": res_message
    }, status=res_status)
@api_view(['POST', ])
@ecell_user
def add_event(request):
    
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    event = EventSerializer(data=request.data)

    try:
        event.is_valid(raise_exception=True)
    except Exception as e:
        error = event.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field:"+str(err)+" -"+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        event.save()
        res_message = "Event Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="events.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Venue', 'Date', 'Time', 'Details', 'Coverpic',
                     'Icon', 'Email', 'Flag'])

    events = Event.objects.all().values_list('name', 'venue', 'date', 'time',
                                             'details', 'cover_pic', 'icon', 'email', 'flag')

    for event in events:
        writer.writerow(event)

    return response


class NoticeBoardListView(ListAPIView):
    queryset = NoticeBoard.objects.filter(show=True)
    serializer_class = NoticeBoardSerializer


class InaugurationViewset(ModelViewSet):
    queryset = Inauguration.objects.filter()
    serializer_class = InaugurationSerializer


class EcellCadets(ModelViewSet):
    queryset = Event.objects.filter(year=2020)
    serializer_class = EventSerializer
