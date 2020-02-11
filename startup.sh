#!/bin/bash

for f in /usr/share/nginx/html/*.html; do
    envsubst < "$f" > /tmp/file.tmp && mv /tmp/file.tmp "$f"
done

nginx -g "daemon off;"
