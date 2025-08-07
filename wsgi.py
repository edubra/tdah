# wsgi.py
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.exceptions import NotFound
from app import create_app

flask_app = create_app()

# monta o app em /tdah
application = DispatcherMiddleware(NotFound(), {
    "/tdah": flask_app
})
