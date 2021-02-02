FROM airhacks/java:14
LABEL maintainer="Adam Bien, adam-bien.com" description="Kafka Oracle Connector without Configuration"
ENV INSTALL_DIR /opt
ENV VERSION 2.13-2.7.0 
ENV DEBEZIUM_VERSION 1.4.0.CR1
ENV KAFKA_HOME ${INSTALL_DIR}/kafka_${VERSION}
ENV ORACLE_INSTANTCLIENT ${INSTALL_DIR}/instantclient
ENV LD_LIBRARY_PATH ${ORACLE_INSTANTCLIENT}/
RUN useradd -b /opt -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -L -O https://ftp-stud.hs-esslingen.de/pub/Mirrors/ftp.apache.org/dist/kafka/2.7.0/kafka_${VERSION}.tgz \
    && tar zxf kafka_${VERSION}.tgz -C ${INSTALL_DIR} \
    && rm kafka_${VERSION}.tgz \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${KAFKA_HOME}/bin/zookeeper-server-start.sh \
    && chmod -R a+rw ${INSTALL_DIR}
RUN curl -O https://repo1.maven.org/maven2/io/debezium/debezium-connector-oracle/${DEBEZIUM_VERSION}/debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz &&\
    tar zxvf debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz -C ${INSTALL_DIR} \
    && rm debezium-connector-oracle-${DEBEZIUM_VERSION}-plugin.tar.gz
COPY ./instantclient ${ORACLE_INSTANTCLIENT}/
RUN cp /opt/debezium-connector-oracle/*.jar ${KAFKA_HOME}/libs/ \
    && cp ${ORACLE_INSTANTCLIENT}/*.jar ${KAFKA_HOME}/libs/ \
    && chown -R serveradmin:serveradmin ${ORACLE_INSTANTCLIENT} \
    && chmod -R a+rw ${ORACLE_INSTANTCLIENT}
RUN yum -y install libaio
COPY run.sh .
RUN chmod a+x run.sh
USER serveradmin
ENTRYPOINT run.sh
EXPOSE 8083
