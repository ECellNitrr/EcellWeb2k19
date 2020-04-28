from django.urls import path
from .views import *
from rest_framework.routers import SimpleRouter 

router = SimpleRouter()
router.register('startup',StartupViewset)
router.register('job',JobViewset)
router.register('job_application',JobApplicationViewset)
router.register('logo',LogoViewset)
router.register('startup_plan_file',StartupPlanFileViewset)
router.register('applicant_education',ApplicantEducationViewset)
router.register('applicant_experience',ApplicantExperienceViewset)
router.register('applicant_organisation',ApplicantOrganisationViewset)
router.register('applicant_skill',ApplicantSkillViewset)
router.register('applicant_project',ApplicantProjectViewset)
router.register('applicant_language',ApplicantLanguageViewset)
router.register('applicant_interest',ApplicantInterestViewset)
router.register('applicant_achievement',ApplicantAchievementViewset)

urlpatterns = [
    path('approve_startup/<int:id>/', update_startup_permissions),
    # path('pro_startup/',pro_get_startup),
]

urlpatterns+=router.urls