#!/bin/sh
docker kill nginx
docker rm nginx
docker run -d -p 80:80 --name nginx airhacks/nginx
