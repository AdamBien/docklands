FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="zookeeper for kafka"
ENV INSTALL_DIR /opt
ENV VERSION 2.13-3.0.0
ENV KAFKA_HOME ${INSTALL_DIR}/kafka_${VERSION}
RUN useradd -b /opt -m -s /bin/sh serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -L -O https://ftp-stud.hs-esslingen.de/pub/Mirrors/ftp.apache.org/dist/kafka/3.0.0/kafka_${VERSION}.tgz \
    && tar zxf kafka_${VERSION}.tgz -C ${INSTALL_DIR} \
    && rm kafka_${VERSION}.tgz \
    && chown -R serveradmin:serveradmin /opt \
    && chmod a+x ${KAFKA_HOME}/bin/zookeeper-server-start.sh \
    && chmod -R a+rw ${INSTALL_DIR}
USER serveradmin
ENTRYPOINT ${KAFKA_HOME}/bin/zookeeper-server-start.sh ${KAFKA_HOME}/config/zookeeper.properties
EXPOSE 2181
