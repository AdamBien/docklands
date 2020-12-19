FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Kafka Oracle Connector"
ENV INSTALL_DIR /opt
ENV VERSION 2.13-2.6.0 
ENV DEBEZIUM_VERSION 1.0.0.Beta3
ENV KAFKA_HOME ${INSTALL_DIR}/kafka_${VERSION}
ENV ORACLE_INSTANTCLIENT ${INSTALL_DIR}/instantclient
ENV LD_LIBRARY_PATH ${ORACLE_INSTANTCLIENT}
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -L -O http://apache.lauf-forum.at/kafka/2.6.0/kafka_${VERSION}.tgz \
    && tar zxf kafka_${VERSION}.tgz -C ${INSTALL_DIR} \
    && rm kafka_${VERSION}.tgz \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${KAFKA_HOME}/bin/zookeeper-server-start.sh \
    && chmod -R a+rw ${INSTALL_DIR}
RUN curl -O https://repo1.maven.org/maven2/io/debezium/debezium-connector-oracle/${DEBEZIUM_VERSION}/debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz &&\
    tar zxvf debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz -C ${INSTALL_DIR} \
    && rm debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz
USER serveradmin
COPY connector.properties ${KAFKA_HOME}/config/
COPY worker.properties ${KAFKA_HOME}/config/
COPY ./instantclient ${ORACLE_INSTANTCLIENT}/
RUN cp /opt/debezium-connector-oracle/*.jar ${KAFKA_HOME}/libs/ \
    && cp ${ORACLE_INSTANTCLIENT}/*.jar ${KAFKA_HOME}/libs/ \
    && chmod -R a+rw ${ORACLE_INSTANTCLIENT}
ENTRYPOINT ${KAFKA_HOME}/bin/connect-standalone.sh ${KAFKA_HOME}/config/worker.properties ${KAFKA_HOME}/config/connector.properties
EXPOSE 8083
