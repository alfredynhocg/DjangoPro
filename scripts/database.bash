#!/bin/bash
# Handle command argument

PASSWORD= "XXXYYYZZZ"

DATABASE="chat_app"
USER="chat_user"


echo $PROJECT
echo $DATABASE
echo $USER
sudo -H -u postgres bash -c "psql -c \"DROP DATABASE ${DATABASE}\""
sudo -H -u postgres bash -c "psql -c \"DROP ROLE IF EXISTS ${USER}\""
sudo -H -u postgres bash -c "psql -c \"CREATE USER ${USER} WITH NOCREATEDB NOCREATEUSER ENCRYPTED PASSWORD '${PASSWORD}'\""
sudo -H -u postgres bash -c "psql -c \"CREATE DATABASE ${DATABASE} WITH OWNER ${USER}\""
