# gunicorn.conf.py

bind = "127.0.0.1:8010"

# Workers/threads — ajuste à sua VPS
worker_class = "gthread"
workers = 2
threads = 8
preload_app = True

timeout = 30
graceful_timeout = 30
keepalive = 5

max_requests = 2000
max_requests_jitter = 200

# Logs
accesslog = "-"
errorlog  = "-"
loglevel  = "info"
access_log_format = '%(h)s - %(u)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %({x-forwarded-for}i)s'

# Se quiser buffer off para prints em tempo real:
# import os; os.environ["PYTHONUNBUFFERED"] = "1"
