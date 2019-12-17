python mysite/manage.py collectstatic --noinput
python mysite/manage.py migrate
gunicorn --chdir mysite --bind :8000 mysite.wsgi:application --reload True