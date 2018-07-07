FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
# For more information about ping see: https://github.com/AdamBien/ping/
COPY ping.war ${DEPLOYMENT_DIR}
HEALTHCHECK --interval=15s CMD curl --fail http://localhost:8080/ping/resources/pings/echo/+ || exit 1
