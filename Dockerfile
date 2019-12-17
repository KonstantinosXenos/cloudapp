# start from an official image
FROM python:3.6

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/djangoapp/src
# copy our project code
COPY backend/requirements.txt /opt/services/djangoapp/src


WORKDIR /opt/services/djangoapp/src
RUN pip install -r requirements.txt

COPY backend /opt/services/djangoapp/src








# expose the port 8000
EXPOSE 8000

# define the default command to run when starting the container
# RUN ["chmod", "+x", "/opt/services/djangoapp/src/backend/startup.sh"]
CMD ["sh","/opt/services/djangoapp/src/startup.sh"]
# CMD ["gunicorn", "--chdir", "mysite", "--bind", ":8000","mysite.wsgi:application"]
