FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV INSTALL_DIR /opt
ENV VERSION db-derby-10.12.1.1
RUN curl -O http://mirror.dkd.de/apache/db/derby/db-derby-10.12.1.1/${VERSION}-bin.zip
RUN unzip ${VERSION}-bin.zip -d ${INSTALL_DIR}
ENTRYPOINT ${INSTALL_DIR}/${VERSION}-bin/bin/startNetworkServer -h 0.0.0.0
EXPOSE 1527