#!/bin/bash
docker build --platform linux/amd64 -t airhacks/java:21 java21/
docker tag airhacks/java:21 airhacks/java
