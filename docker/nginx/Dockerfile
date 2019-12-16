# SETUP NGINX
FROM nginx:1.16.0-alpine

LABEL maintainer=thibault@nobbas.com
LABEL version=0.1

COPY docker/nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/config/server.conf /etc/nginx/sites-available/server.conf
RUN mkdir -p /etc/nginx/sites-enabled/ && \
  ln -s /etc/nginx/sites-available/server.conf /etc/nginx/sites-enabled/server.conf

CMD nginx -g "daemon off;"