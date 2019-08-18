from django.core.management.base import BaseCommand, CommandError
from iportal.models import *
from faker import Faker
from users.models import CustomUser
import random
from django.contrib.auth.hashers import make_password

fake = Faker()

class Command(BaseCommand):
    def handle(self, *args, **options):
        password_fake = make_password('abcd1234')

        for x in range(150):
            fname, lname = fake.name().split()[0],fake.name().split()[0]
            fname += str(random.randrange(0,10000))
            email = 'tester' + fname + '@gmail.com'
            contact = 8940073123

            user = CustomUser.objects.create(
                username = fname + ' ' + lname,
                first_name = fname,
                last_name = lname,
                password=password_fake,
                email = email,
                otp = '1234',
                verified = True,
                contact = contact,
                )
            print('customuser {}'.format(x))

            ad1,ad2=fake.address().split('\n')
            
            Startup.objects.create(
                name = 'startup '+ fname,
                email = fname + '@gmail.com',
                contact = contact,
                brief = fake.text(250),
                description = fake.text(random.randint(1000,2000)),
                sector = 'education',
                user=user,
                
                address1 = ad1,
                address2 = ad2,
                district = fake.text(25),
                state = fake.text(25),
                country = 'india',
                approved = True
            )

            # print(fake.name(),fake.address(),fake.text())