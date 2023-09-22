#!/bin/bash

################################################################
##
##   Script for Create, drop database > MYSQL/POSTGRESQL
##   Last Update: 17 Marzo 2019
##
################################################################

RED="\033[1;31m"
GREEN="\033[1;32m"
NOCOLOR="\033[0m"
BLUE="\[\033[0;34m\]" 
UBlue="\[\033[4;34m\]"
On_Blue="\[\033[44m\]"
IYellow="\[\033[0;93m\]" 
BIYellow="\[\033[1;93m\]"

APP="devlaravel"


# SET CONFIG POSTGRES
DATABASE="${APP}_app"   # DATABASE NAME
USER="${APP}_user"   # DATABASE USERNAME
PSQLPASSDATABASE="XXXYYYZZZ"  # DATABASE PASSWORD
PORT_POSTGRES="5432" # PORT POSTGRES
PGSQL="pgsql" # TYPE DATABASE

PSQLPASSSYSTEM="5dv4rrgq8au7"  # SYSTEM PASSWORD

# SET CONFIG MYSQL
PORT_MYSQL="3306" # PORT MYSQL
MYSQLUSER="root" #USER MYSQL DEFAULT



apt_install(){
   echo

   echo -e "${BIYellow} STEP > 1: update apt cache${BIYellow}"
   sudo apt-get update

   echo

   echo -e "${RED} STEP > 2: upgrade packages${RED}"
   sudo apt-get upgrade

   echo


   echo -e "${RED} STEP > 2: composer packeges install ${RED}"
   sudo composer install

   echo


   echo -e "${GREEN} STEP > 3: installing php modules${GREEN}"
   sudo apt-get install php-xml -y
   sudo apt-get install php7.1-xml -y
   sudo apt-get install php-mbstring -y
   sudo apt-get install php-pgsql -y
   sudo apt-get install php-mysql -y
   # sudo apt install php-bcmath -y 

   echo

   echo -e "${BLUE} STEP > 4: Restart apache server${BLUE}"
   sudo systemctl restart apache2
   sudo service apache2 restart
   echo
}


create_env(){
   i=0
   while read p; do
      if [ $i -eq 8 ];
      then
         echo "DB_CONNECTION"="$1" >> .env
         echo "DB_PORT"="$2" >> .env
         echo "DB_DATABASE"="$DATABASE" >> .env
         echo "DB_USERNAME"="$3" >> .env
         echo "DB_PASSWORD"="$4" >> .env
      else
         echo "$p" >> .env
      fi
      ((i++))
   done <config.txt
   echo ".env generado Exitosamente ..."
}


while :
do
   printf 'Con que base de datos trabajar?: POSTGRES,MYSQL: '
   read OPTION
   
   rm -rf .env

   _DATABASES=${OPTION}

   case $_DATABASES in
      postgres)
         sudo -u postgres psql -c "DROP DATABASE $DATABASE"
         sudo -u postgres psql -c "DROP USER $USER"
         sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD '$PSQLPASSDATABASE';"
         sudo -u postgres psql -c "CREATE DATABASE $DATABASE WITH OWNER $USER"
         create_env $PGSQL $PORT_POSTGRES $USER $PSQLPASSDATABASE
         sleep 3
         // apt_install
         break
         ;;
      mysql)

        printf 'Cual sera el nombre de la app?: '
        read OPTION1
        _APP=${OPTION1}

        cd apps
        django-admin startapp $_APP

         sleep 3
         break
         ;;
      *)
         clear
         echo "No ingresaste ninguna opcion ctrl+c para salir"
         ;;
   esac
done

