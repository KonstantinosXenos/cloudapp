#!/bin/bash
set +e
echo "starting"
python3 mysite/manage.py collectstatic --noinput
python3 mysite/manage.py migrate
gunicorn --chdir mysite --bind :8000 mysite.wsgi:application --reload
echo "ok"