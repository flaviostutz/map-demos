FROM nginx:1.17.0

ADD /src/ /usr/share/nginx/html/

ADD /default.conf /etc/nginx/conf.d/

