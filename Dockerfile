# start from an official image
FROM python:3.6

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/djangoapp/src
# copy our project code
COPY backend /opt/services/djangoapp/src

WORKDIR /opt/services/djangoapp/src
RUN ls
RUN pip install -r requirements.txt
# install our two dependencies




# expose the port 8000
EXPOSE 8000

# define the default command to run when starting the container
CMD ["gunicorn", "--chdir", "mysite", "--bind", ":8000", "mysite.wsgi:application","--reload","True"]