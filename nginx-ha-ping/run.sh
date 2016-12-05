#!/bin/bash
docker kill nginx-ha-ping
docker rm nginx-ha-ping
docker run -d --net airhacks -p 8282:8080 --name nginx-ha-ping airhacks/nginx-ha-ping