#!/bin/bash
VERSION=11
docker build -t airhacks/java:${VERSION} openjdk/
docker push airhacks/java:${VERSION}
