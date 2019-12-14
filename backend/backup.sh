#!/bin/sh
LOG_LOCATION=/media/koinos/mayan/myproject
info() { printf "\n%s %s\n\n" "$( date )" "$*" >&2; }
trap 'echo $( date ) Backup interrupted >&2; exit 2' INT TERM
info "starting backup" 2>&1 | tee -a $LOG_LOCATION/logfile
docker-compose -f /media/koinos/mayan/myproject/docker-compose.yml stop
sudo BORG_PASSPHRASE='t3iktb3uitgg43ion' borg create -s -v /media/koinos/mayan/webdatabase::$(date +%F) /docker-volumes/production 2>&1 | tee -a $LOG_LOCATION/logfile
docker-compose -f /media/koinos/mayan/myproject/docker-compose.yml up -d

sudo BORG_PASSPHRASE='t3iktb3uitgg43ion' borg prune -v --list --keep-daily=20 --keep-weekly=10 --keep-monthly=12 --keep-yearly=2 /media/koinos/mayan/webdatabase 2>&1 | tee -a $LOG_LOCATION/logfile

info "backup complete" 2>&1 | tee -a $LOG_LOCATION/logfile
