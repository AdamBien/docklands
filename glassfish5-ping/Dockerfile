FROM airhacks/glassfish:v5
LABEL maintainer="Adam Bien, adam-bien.com" description="GlassFish v5 with healthcheck utility"
# For more information about ping see: https://github.com/AdamBien/ping/
COPY ping.war ${DEPLOYMENT_DIR}
ENV WAR ping.war
HEALTHCHECK --interval=15s CMD curl --fail http://localhost:8080/ping/resources/pings/echo/+ || exit 1
