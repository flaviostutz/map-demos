FROM nginx:1.17.0

RUN \
  apt-get update \
  && apt-get -y install gettext-base \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* 

ENV GEOJSON_URL 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes_north_america.geojson'
ENV MAPBOX_VECTOR_TILE_URL 'https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf'

ADD /src/ /usr/share/nginx/html/
ADD /default.conf /etc/nginx/conf.d/
ADD /startup.sh /

CMD ["/startup.sh"]
