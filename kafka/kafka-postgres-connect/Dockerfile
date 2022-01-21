FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Kafka PostgreSQL Connector"
ENV INSTALL_DIR /opt
ENV VERSION 2.13-3.0.0
ENV DEBEZIUM_VERSION 1.8.0.Final
ENV KAFKA_HOME ${INSTALL_DIR}/kafka_${VERSION}
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -O https://dlcdn.apache.org/kafka/3.0.0/kafka_${VERSION}.tgz \
    && tar zxf kafka_${VERSION}.tgz -C ${INSTALL_DIR} \
    && rm kafka_${VERSION}.tgz \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${KAFKA_HOME}/bin/zookeeper-server-start.sh \
    && chmod -R a+rw ${INSTALL_DIR}
RUN curl -L -O https://repo1.maven.org/maven2/io/debezium/debezium-connector-postgres/${DEBEZIUM_VERSION}/debezium-connector-postgres-${DEBEZIUM_VERSION}-plugin.tar.gz &&\
    tar xvf debezium-connector-postgres-${DEBEZIUM_VERSION}-plugin.tar.gz -C ${INSTALL_DIR}
USER serveradmin
COPY connector.properties ${KAFKA_HOME}/config/
COPY worker.properties ${KAFKA_HOME}/config/
RUN cp /opt/debezium-connector-postgres/*.jar ${KAFKA_HOME}/libs/
ENTRYPOINT ${KAFKA_HOME}/bin/connect-standalone.sh ${KAFKA_HOME}/config/worker.properties ${KAFKA_HOME}/config/connector.properties
EXPOSE 8083
