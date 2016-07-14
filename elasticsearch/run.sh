#!/bin/bash
docker kill elasticsearch
docker rm elasticsearch
docker run -d -p 9200:9200 -p 9300:9300 --name elasticsearch airhacks/elasticsearch
