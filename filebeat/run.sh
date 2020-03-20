#!/bin/sh
docker rm -f filebeat || true 
docker run --net elk --name filebeat \
    --volume="/var/lib/docker/containers:/var/lib/docker/containers:ro" \
    --volume="/var/run/docker.sock:/var/run/docker.sock:ro" \
    airhacks/filebeat 
