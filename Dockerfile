FROM nginx:1.17.0

RUN \
  apt-get update \
  && apt-get -y install gettext-base \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* 

ENV GEOJSON_URL ''
ENV MAPBOX_VECTOR_TILE_URL ''

ADD /src/ /usr/share/nginx/html/

ADD /default.conf /etc/nginx/conf.d/

ADD /startup.sh /

CMD ["/startup.sh"]
