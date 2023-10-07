## Proyecto Diplomado

**Full Stack** Proyecto Django
### Tecnologías

  * [Django](https://www.djangoproject.com/)
  * [MariaDB](https://mariadb.org/)
  * [Python](https://www.python.org/)

### Integrantes del Grupo

  - `Milenka Susan Espinal Copa`
  - `Patty Castro Carlo`
  - `Francisco Humberto Flores Huanca`
  - `Luis Angel Quispe Limachi`
  - `Alfredo Callizaya Gutierrez`


### Comandos para Levantar el Proyecto

  - crear el entorno virtual (antes deben instalar virtualenvm eso se instala con "pip install virtualenv")/ python -m virtualenv env   
  - activar el entorno virtual / cd env , cd Scripts/, activate.bat
  - una ves activo el env instalar los paquetes con / pip install -r common.txt
  - levantar el proyecto con Makefile (puedes instalar makefile con linux con apt install make o en windows con chocolatey) , o en todo caso con el comando /: python manage.py runserver --settings=settings.config.development
  - las migraciones se hacen con el comando: 	python manage.py makemigrations --settings=settings.config.development
    python manage.py migrate --settings=settings.config.development

### Crear super usuario

	- python manage.py createsuperuser --username=django --email=django@project.com --settings=settings.config.development

### Ver las rutas (urls) del proyecto

  - python manage.py show_urls --settings=settings.config.development
  - o abrir el archivo rutas.txt

### Django Constance

python manage.py seed category --settings=settings.config.development --number=100 

python manage.py seed category --number=15

pip install django-seed