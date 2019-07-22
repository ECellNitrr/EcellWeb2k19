from django.urls import path
from . import views


urlpatterns = [
    path('request_approval/', views.request_approval, name='request_approval'),
    path('request_list/', views.user_request_list, name='request_list'),
    path('ca_dashboard_details/',views.ca_dashboard_details,name='ca_dashboard_details'),

    path('req_status/', views.req_status, name='req_status'),

    path('request_confirm/<int:id>/', views.confirm_approval, name='confirm_approval'),
    path('approve_request/<int:userid>/<int:id>/',views.approve_request, name='approve_request'),
    path('decline_request/<int:userid>/<int:id>/',views.decline_request, name='decline_request'),
    path('leaderboard/',views.leaderboard, name='leaderboard'),
]