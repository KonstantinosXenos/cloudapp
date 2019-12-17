# start from an official image
FROM python:3.6

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/djangoapp/src
# copy our project code
COPY backend/requirements.txt /opt/services/djangoapp/src


WORKDIR /opt/services/djangoapp/src
RUN pip install -r requirements.txt

COPY ./backend /opt/services/djangoapp/src
RUN rm -R /opt/services/djangoapp/frontend; exit 0
COPY ./dist /opt/services/djangoapp/frontend







# expose the port 8000
EXPOSE 8000

# define the default command to run when starting the container

CMD ["sh","startup.sh"]
