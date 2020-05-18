FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Grafana"
ENV ARCHIVE grafana-6.7.3
ENV INSTALL_DIR .
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -L -O https://dl.grafana.com/oss/release/grafana-6.7.3.linux-amd64.tar.gz \
    && tar zxf ${ARCHIVE}.linux-amd64.tar.gz
WORKDIR ${ARCHIVE}
ENTRYPOINT ./bin/grafana-server web
EXPOSE 3000
