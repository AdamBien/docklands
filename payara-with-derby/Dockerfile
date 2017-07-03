FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION db-derby-10.12.1.1
RUN curl -O http://mirror.dkd.de/apache/db/derby/db-derby-10.12.1.1/${VERSION}-bin.zip
RUN unzip ${VERSION}-bin.zip -d ${INSTALL_DIR}
RUN rm -R ${INSTALL_DIR}payara41/javadb && mv ${INSTALL_DIR}${VERSION}-bin ${INSTALL_DIR}/payara41/javadb
ENTRYPOINT echo deploy ${DEPLOYMENT_DIR}/${WAR} > deploy-command && \
           asadmin start-database && asadmin start-domain --verbose --postbootcommandfile deploy-command ${DOMAIN_NAME}
EXPOSE 1527
