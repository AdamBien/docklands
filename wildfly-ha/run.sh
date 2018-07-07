#!/bin/sh
docker rm -f wildfly-ha1 || true && docker run -d --net wildfly-ha  -p 8081:8080 --name wildfly-ha1 airhacks/wildfly-ha
docker rm -f wildfly-ha2 || true && docker run -d --net wildfly-ha  -p 8082:8080 --name wildfly-ha2 airhacks/wildfly-ha
