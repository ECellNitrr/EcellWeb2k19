cd frontend
npm run build
cd ..
source env/bin/activate
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py collectstatic --no-input
python3 manage.py runserver 0.0.0.0:8000