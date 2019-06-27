from django.test import TestCase
from django.urls import reverse, resolve
from users.models import CustomUser, CampusAmbassadorProfile
from utils.test_utils import create_user, save_user, create_campus_ambassador


class TestModels(TestCase):

    def test_username_is_assigned_on_create(self):
        # tests blank username
        test_user = create_user()
        self.assertEquals(test_user.username, test_user.email)

        # tests if some invalid username is assigned
        test_user1 = create_user(username='username1')
        self.assertEquals(test_user1.username, test_user1.email)

    def test_username_is_assigned_on_save(self):
        # tests blank username
        test_user = save_user()
        self.assertEquals(test_user.username, test_user.email)

        # tests if some invalid username is assigned
        test_user1 = save_user(username='username1')
        self.assertEquals(test_user1.username, test_user1.email)

    def test_campus_ambassador_user_type_on_save(self):
        # tests default values
        test_ca = create_campus_ambassador()
        self.assertEquals(test_ca.user.user_type, 'CAB')

        # tests for assigned values
        test_user = create_user(user_type='EXE')
        test_ca1 = create_campus_ambassador(user=test_user)
        self.assertEquals(test_ca1.user.user_type, 'CAB')

    # create: test for incomplete user creation details once api is ready
