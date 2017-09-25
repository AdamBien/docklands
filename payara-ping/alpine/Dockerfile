FROM airhacks/payara:alpine
MAINTAINER Adam Bien, adam-bien.com
# For more information about ping see: https://github.com/AdamBien/ping/
COPY ping.war ${DEPLOYMENT_DIR}
ENV WAR ping.war
HEALTHCHECK --interval=15s CMD curl --fail http://localhost:8080/ping/resources/pings/echo/+ || exit 1
