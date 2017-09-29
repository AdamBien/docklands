FROM airhacks/openliberty-webprofile7
LABEL maintainer="Tobias N. Sasse, @tnsasse and Adam Bien, adam-bien.com" description="OpenLiberty Java EE 7 WebProfile with ping healthcheck: https://github.com/adambien/ping" 
ENV DEPLOYMENT_DIR /config/dropins/
COPY ping.war ${DEPLOYMENT_DIR}
