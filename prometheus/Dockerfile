FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV ARCHIVE prometheus-1.5.2.linux-amd64
ENV INSTALL_DIR .
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -o ${SERVER_HOME}.tar.gz -L https://github.com/prometheus/prometheus/releases/download/v1.5.2/prometheus-1.5.2.linux-amd64.tar.gz \
            && tar xvfz ${SERVER_HOME}.tar.gz
WORKDIR ./prometheus-1.5.2.linux-amd64
COPY prometheus.yml .
ENTRYPOINT ./prometheus -config.file=prometheus.yml
EXPOSE 9090
