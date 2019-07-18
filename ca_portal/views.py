from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from decorators import ecell_user
from users.models import CustomUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@csrf_exempt
@ecell_user
@api_view(['POST','GET'])
def request_approval(request):
    
    try:
        if request.ecelluser.user_type == 'CAB':
            if request.method == 'POST':
                form = RequestApprovalForm(request.POST, request.FILES)
                if form.is_valid():
                    obj = form.save()
                    obj.user = request.ecelluser
                    obj.save()
            profile = request.user
            try:
                total_requests = profile.requests.all().count()
                accepted_requests = profile.requests.filter(status_flag=1).count()
                rejected_requests = profile.requests.filter(status_flag=-1).count()
                pending_requests = profile.requests.filter(status_flag=0).count()
            except:
                total_requests = 0
                accepted_requests = 0
                rejected_requests = 0
                pending_requests = 0

            return render(request, 'base_portal.html', context={
                'form': True,
                't_req': total_requests,
                'a_req': accepted_requests,
                'r_req': rejected_requests,
                'p_req': pending_requests,
            })
        else:
            return Response({"message":"Not CA Yet!"}, status=status.HTTP_200_OK)
            # return render(request, 'notcayet.html')
    except:
        return Response({"message":"Not Logged In!"}, status=status.HTTP_200_OK)
        # return  render(request, 'notloggedinerr.html')


def get_profile_data():
    users = CustomUser.objects.all()
    user_data = []
    for user in users:
        data = {}
        if user.requests.count():
            data['username'] = user.username
            data['first'] = user.first_name
            data['last'] = user.last_name
            data['email'] = user.email
            data['id'] = user.id
            data['pending'] = user.requests.filter(status_flag=0).count()
            if (data['pending'] == 0):
                pass
            else:
                user_data.append(data)
    return user_data


@ecell_user
def request_status(request, flag):
    try:
        profile = request.ecelluser
    except:
        return redirect('loginweb')
    data = profile.requests.filter(status_flag=flag)
    return data


def pending_status(request):
    data = request_status(request, 0)
    return render(request, 'base_portal.html', {'form': False, 'requests': data})


def approved_status(request):
    data = request_status(request, 1)
    return render(request, 'base_portal.html', {'form': False, 'requests': data})


def rejected_status(request):
    data = request_status(request, -1)
    return render(request, 'base_portal.html', {'form': False, 'requests': data})


@csrf_exempt
@ecell_user
def user_request_list(request):
    if request.ecelluser.user_type in ['EXE', 'MNG', 'OCO', 'HCO']:
        user_data = get_profile_data()
        return render(request, 'executive_portal.html', {'users': user_data})
    else:
        return redirect('loginweb')


@csrf_exempt
@ecell_user
def confirm_approval(request, id):
    if request.ecelluser.user_type in ['EXE', 'MNG', 'OCO', 'HCO']:
        user_data = get_profile_data()
        ca_requests = CA_Requests.objects.filter(status_flag=0, user__pk=id)
        return render(request, 'executive_portal.html', {
            'ca_requests': ca_requests,
            'users': user_data,
            'user_id': id,
        })
    else:
        return redirect('loginweb')


@csrf_exempt
@ecell_user
def approve_request(request, userid, id):
    if request.ecelluser.user_type in ['EXE', 'MNG', 'OCO', 'HCO']:
        ss = get_object_or_404(CA_Requests, id=id)
        ss.status_flag = 1
        if ss.social_platform == 'FB':
            ss.user.ca_fb_score += int(config("FB_SCORE"))
            ss.user.ca_score += int(config("FB_SCORE"))
        elif ss.social_platform == 'LI':
            ss.user.ca_li_score += int(config("LI_SCORE"))
            ss.user.ca_score += int(config("LI_SCORE"))
        elif ss.social_platform == 'TW':
            ss.user.ca_tw_score += int(config("TW_SCORE"))
            ss.user.ca_score += int(config("TW_SCORE"))
        else:
            ss.user.ca_wp_score += int(config("WP_SCORE"))
            ss.user.ca_score += int(config("WP_SCORE"))
        ss.user.save()
        ss.save()
        return redirect('confirm_approval', id=userid)
    else:
        return redirect('loginweb')


@csrf_exempt
@ecell_user
def decline_request(request, userid, id):
    if request.ecelluser.user_type in ['EXE', 'MNG', 'OCO', 'HCO']:
        ss = get_object_or_404(CA_Requests, id=id)
        ss.status_flag = -1
        ss.save()
        return redirect('confirm_approval', id=userid)
    else:
        return redirect('loginweb')


def leaderboard(request):
    cas = CustomUser.objects.filter(user_type__iexact='CAB').order_by('-ca_score')
    context = {
        'cas': cas
    }
    return render(request, "leaderboard.html", context)