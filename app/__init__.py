# app/__init__.py
from flask import Flask
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.exceptions import NotFound

def create_app():
    app = Flask(__name__, static_url_path="/tdah/static")  # estáticos com prefixo
    app.secret_key = "segredo-seguro-aqui"

    from .routes import main
    app.register_blueprint(main)

    return app

# wsgi.py (novo arquivo na raiz do projeto, ao lado do app.py)
from app import create_app
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.exceptions import NotFound

flask_app = create_app()

# monta app em /tdah
application = DispatcherMiddleware(NotFound(), {"/tdah": flask_app})