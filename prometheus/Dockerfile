FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Prometheus with basic config"
ENV ARCHIVE prometheus-2.18.1.linux-amd64
ENV INSTALL_DIR .
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -o ${SERVER_HOME}.tar.gz -L https://github.com/prometheus/prometheus/releases/download/v2.18.1/prometheus-2.18.1.linux-amd64.tar.gz \
            && tar xvfz ${SERVER_HOME}.tar.gz
WORKDIR ${SERVER_HOME}/prometheus-2.18.1.linux-amd64
COPY prometheus.yml .
ENTRYPOINT ./prometheus --config.file=prometheus.yml
EXPOSE 9090
