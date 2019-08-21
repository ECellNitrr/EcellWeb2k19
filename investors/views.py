from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Investor
from .serializers import InvestorSerializer
from decorators import ecell_user
from django.http import HttpResponse, JsonResponse
from django_filters import rest_framework as filters
import csv


@api_view(['GET', ])

@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="investors.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name','Company','Experience','Profile Picture','Email',
                    'Contact','Description','Year','Social Media','Flag'])

    investors = Investor.objects.all().values_list('name','company','experience','profile_pic','email',
                                                'contact','description','year','social_media','flag')
    for investor in investors:
        writer.writerow(investor)

    return response


class FullInvestorsAPIView(ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('year',)
