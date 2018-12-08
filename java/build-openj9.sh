#!/bin/bash
VERSION=11_28
docker build -t airhacks/openj9:${VERSION} openj9/
docker tag airhacks/openj9:${VERSION} airhacks/openj9
docker push airhacks/openj9:${VERSION}
docker push airhacks/openj9