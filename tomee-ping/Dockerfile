FROM airhacks/tomee
MAINTAINER Adam Bien, adam-bien.com
COPY ping.war ${DEPLOYMENT_DIR}
HEALTHCHECK CMD curl --fail http://localhost:8080/ping/resources/pings/echo/+ || exit 1