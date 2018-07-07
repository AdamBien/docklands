FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Grafana"
ENV ARCHIVE grafana-4.6.2
ENV INSTALL_DIR .
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -L -O https://s3-us-west-2.amazonaws.com/grafana-releases/release/${ARCHIVE}.linux-x64.tar.gz \
    && tar zxf ${ARCHIVE}.linux-x64.tar.gz
WORKDIR ${ARCHIVE}
ENTRYPOINT ./bin/grafana-server web
EXPOSE 3000
