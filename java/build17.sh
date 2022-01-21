#!/bin/bash
docker build --platform linux/amd64 -t airhacks/java:17 java17/
docker tag airhacks/java:17 airhacks/java
