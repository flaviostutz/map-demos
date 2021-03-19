# map-demos

Demos showing maps on various sources

## Usage

* Create a docker-compose.yml file:

```yml
version: '3.7'
services:
  map-demos:
    image: flaviostutz/map-demos
    ports:
      - 8181:80
    environment:
      - GEOJSON_URL=https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_lakes_north_america.geojson
      - MAPBOX_VECTOR_TILE_URL=https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf

```

* Run 'docker-compose up'

* Open browser at 'http://localhost:8181' and open demo maps

## Flow

![WFSDiagram](WFSDiagram.png)
