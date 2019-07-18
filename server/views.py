import csv
from django.http import HttpResponse

def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="mentors.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Contact', 'Email', 'Details',
                     'Description', 'Profile_Pic', 'Flag', 'Year'])

    values = [
        ['name','contact','email','details','description','profile_pic','flag','year'],
        ['name1','contact1','email1','details1','description1','profile_pic1','flag1','year1'],
        ['name2','contact2','email2','details2','description2','profile_pic2','flag2','year2']
    ]

    for mentor in values:
        writer.writerow(mentor)

    return response