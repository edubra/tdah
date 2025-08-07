# app/__init__.py
from flask import Flask

def create_app():
    app = Flask(
        __name__,
        static_folder="static",            # app/static
        template_folder="../templates"     # ../templates (irmã de app/)
    )
    app.secret_key = "segredo-seguro-aqui"

    from .routes import main
    app.register_blueprint(main)          # sem url_prefix aqui
    return app
