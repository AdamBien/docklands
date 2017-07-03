FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION db-derby-10.12.1.1
RUN curl -O http://mirror.dkd.de/apache/db/derby/db-derby-10.12.1.1/${VERSION}-bin.zip
RUN unzip ${VERSION}-bin.zip -d ${INSTALL_DIR}
RUN rm -R ${INSTALL_DIR}payara41/javadb && mv ${INSTALL_DIR}${VERSION}-bin ${INSTALL_DIR}/payara41/javadb
ADD start.sh .
RUN chmod a+x start.sh
ENTRYPOINT start.sh
EXPOSE 1527
