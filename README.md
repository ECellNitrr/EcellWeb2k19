# EcellWeb2k19

## Setup
To Setup this Project and contribute follow below guidelines.

1. First fork the repo and clone it using

    `git clone https://github.com/<Your-Username>/EcellWeb2k19.git`
  
2. Change the CWD to the project folder

    `cd EcellWeb2k19`
    

3. Make virtual Environment (Python version recommeded = v3.6)

    `virtualenv --python=/usr/bin/python<version> myenv`

4. Activate the Virtual Environment

    `source myenv/bin/activate`

5. Install requirements.txt

    `pip install -r requirements.txt`
    
6. Setup Postgres Database with given credentials

    >DATABASE NAME : ecellweb
    
    >USERNAME : ecellnitrr
    
    >PASSWORD : ECellWeb2k19

7. Make all the Migrations

    `python manage.py makemigrations`

8. Run Migration command
    
    `python manage.py migrate`

9. Make a superuser for admin panel

    `python manage.py createsuperuser`
    
10. Run the server
  
    `python manage.py runserver`
