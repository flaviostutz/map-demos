#!/bin/bash

for f in /usr/share/nginx/html/*.html; do
    envsubst < "$f" > "$f"
done

nginx -g "daemon off;"
