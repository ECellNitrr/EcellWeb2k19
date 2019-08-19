cd frontend
npm run build
cd ..
source env/bin/activate
python3 manage.py collectstatic --no-input
git add .
git commit -m 'built the frontend and collected static'
echo 'done building'