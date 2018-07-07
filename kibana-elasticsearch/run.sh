#!/bin/bash
NAME=kibana-elasticsearch
docker rm -f ${NAME}
docker run -d -p 5601:5601 --name ${NAME} airhacks/${NAME}
