## OpenBackend

**OpenStack** Backend Project
### Tecnologías

  * [Django](https://www.djangoproject.com/)
  * [Postgres](https://www.postgresql.org/)


### Crear Base de Datos en postgres

  - `sudo su postgres`
  - `psql -c "DROP DATABASE dev_app"`
  - `psql -c "DROP USER dev_user"`
  - `psql -c "CREATE USER dev_user WITH ENCRYPTED PASSWORD 'XXXYYYZZZ'"`
  - `psql -c "CREATE DATABASE dev_app WITH OWNER dev_user"`



### Crear Install redis server / Django Constance

	- sudo apt-get install redis-server

DevZone es soportado por [@alfredynho](alfredynho.cg@gmail.com).


python manage.py seed category --settings=settings.config.development --number=100 

python manage.py seed category --number=15

pip install django-seed