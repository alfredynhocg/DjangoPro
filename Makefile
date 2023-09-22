SETTINGS=config.settings.local
PYTHON_ENV := DJANGO_SETTINGS_MODULE=$(SETTINGS) ./env/bin/python
PIP_ENV := DJANGO_SETTINGS_MODULE=$(SETTINGS) ./env/bin/pip
COVERAGE_ENV := DJANGO_SETTINGS_MODULE=$(SETTINGS) ./env/bin/coverage
DEPS := grep -vE '^\s*\#' $(CURDIR)/requirements/system.txt  | tr '\n' ' '
HOST := hostname -I

VENV_NAME=env
VENV_ACTIVATE=. $(VENV_NAME)/bin/activate

run:
	@echo "------------------------> Reising Server <------------------------"
	python manage.py runserver --settings=settings.config.development

share:
	@echo ----------------------------------------------------------------------
	@echo "   >>>>>  Listo para compartir Proyecto        <<<<<   "
	$(HOST)
	@echo "------------------------> shared Server <------------------------"
	$(PYTHON_ENV) manage.py runserver 0.0.0.0:8000 --settings=settings.config.development


user:
	python manage.py createsuperuser --username=django --email=django@project.com --settings=settings.config.development


shell:
	python manage.py shell --settings=settings.config.development


migrate:
	python manage.py makemigrations --settings=settings.config.development
	python manage.py migrate --settings=settings.config.development


collect:
	python manage.py collectstatic --settings=settings.config.development


tunnel:
	./ngrok http 8000


install:
	virtualenv -p python3 env
	$(PIP_ENV) install -r requirements/common.txt	
	npm install


prod:
	pip install -r requirements/production.txt


dumpdata:
	$(PYTHON_ENV) manage.py dumpdata --settings=settings.config.development ruta > ruta.json
	@echo "   >>>>> Backup app dates ruta <<<<<"


loaddata:
	$(PYTHON_ENV) python manage.py loaddata --settings=rutabo.settings.development ruta.json
	@echo "   >>>>> Restore app dates ruta <<<<<"


database:
	sudo ./scripts/database.bash
	@echo "---"
	@echo "Database has been reseted"

constance:
	$(PYTHON_ENV) manage.py constance --settings=settings.config.development list


options:
	@echo
	@echo ----------------------------------------------------------------------
	@echo "   >>>>>                 Openbackend               <<<<<   "
	@echo ----------------------------------------------------------------------
	@echo
	@echo "   - install     SETTINGS=[settings]    Install App and their dependencies"
	@echo "   - superuser   SETTINGS=[settings]    Create a super user in production"
	@echo "   - serve       SETTINGS=[settings]    Serve project for development"
	@echo "   - mail_server SETTINGS=[settings]    Open the Development Mail Server"
	@echo "   - shell       SETTINGS=[settings]    Run Django in shell mode for development"
	@echo "   - test        SETTINGS=[settings]    Run Django test cases"
	@echo "   - constance   SETTINGS=[settings]    settings django contance"
	@echo
	@echo ----------------------------------------------------------------------

clean:
	rm -rf node_modules
	rm -rf static/dist

lint:
	@npm run lint --silent

dd:
	sh ./scripts/app.sh