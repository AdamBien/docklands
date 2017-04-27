FROM airhacks/java:alpine
MAINTAINER Adam Bien, adam-bien.com
ENV PAYARA_ARCHIVE payara41
ENV DOMAIN_NAME domain1
ENV INSTALL_DIR /
RUN curl -o ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -L http://bit.ly/1Gm0GIw \
    && unzip ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -d ${INSTALL_DIR} \
    && rm ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip
ENV PAYARA_HOME ${INSTALL_DIR}/payara41/glassfish
ENV DEPLOYMENT_DIR ${INSTALL_DIR}deploy
RUN mkdir ${DEPLOYMENT_DIR}
WORKDIR ${PAYARA_HOME}/bin
ENTRYPOINT ./asadmin start-domain ${DOMAIN_NAME} && \
           ./asadmin deploy ${DEPLOYMENT_DIR}/${WAR} && \
           tail -f ${PAYARA_HOME}/domains/${DOMAIN_NAME}/logs/server.log
EXPOSE 4848 8009 8080 8181
