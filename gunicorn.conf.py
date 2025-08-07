# gunicorn.conf.py

# ---- Básico
bind = "127.0.0.1:8010"
worker_class = "gthread"          # bom p/ Flask I/O-bound; alternativa: "sync"
workers = 2                       # ajuste com base na máquina (ver abaixo)
threads = 8                       # 4–16 é bom; teste 8 primeiro
preload_app = True                # start mais rápido e menos memória por worker
timeout = 30                      # seg p/ requests "travados"
graceful_timeout = 30
keepalive = 5

# ---- Robustez
max_requests = 2000               # recicla workers p/ evitar memory leaks
max_requests_jitter = 200

# ---- Proxy/Nginx
# Aceita cabeçalhos X-Forwarded-* do Nginx
forwarded_allow_ips = "*"         # ou "127.0.0.1"
proxy_protocol = False

# ---- Logs
accesslog = "/var/www/tdah/logs/access.log"
errorlog  = "/var/www/tdah/logs/error.log"
loglevel  = "info"
# Ex.: %({x-forwarded-for}i)s mostra o IP real vindo do Nginx
access_log_format = '%(h)s - %(u)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %({x-forwarded-for}i)s'

# ---222- Performance/GC (opcional, ajuste com parcimônia)
git# import os; os.environ["PYTHONUNBUFFERED"] = "1"
