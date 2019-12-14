DEBUG = True
ALLOWED_HOSTS = ['localhost']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mayan',
        'USER': 'mayan',
        'PASSWORD': 'mayanuserpass',
        'HOST': '10.20.20.19',
        'PORT': '5433'
    }
}