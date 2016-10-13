#!/bin/bash
NAME=kibana
docker kill ${NAME}
docker rm ${NAME}
docker run -d -p 5601:5601 --name ${NAME} airhacks/${NAME}
