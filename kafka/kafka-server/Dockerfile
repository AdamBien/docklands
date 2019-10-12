FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Kafka Server"
ENV INSTALL_DIR /opt
ENV VERSION 2.12-2.3.0 
ENV KAFKA_HOME ${INSTALL_DIR}/kafka_${VERSION}
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -O http://apache.lauf-forum.at/kafka/2.3.0/kafka_${VERSION}.tgz \
    && tar zxf kafka_${VERSION}.tgz -C ${INSTALL_DIR} \
    && rm kafka_${VERSION}.tgz \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${KAFKA_HOME}/bin/zookeeper-server-start.sh \
    && chmod -R a+rw ${INSTALL_DIR}
USER serveradmin
RUN rm ${KAFKA_HOME}/config/server.properties
COPY server.properties ${KAFKA_HOME}/config/server.properties
ENTRYPOINT ${KAFKA_HOME}/bin/kafka-server-start.sh ${KAFKA_HOME}/config/server.properties
EXPOSE 9092
