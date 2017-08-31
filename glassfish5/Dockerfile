FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV GLASSFISH_ARCHIVE glassfish5
ENV DOMAIN_NAME domain1
ENV INSTALL_DIR /
RUN curl -o ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip -L http://download.oracle.com/glassfish/5.0/promoted/latest-glassfish.zip \ 
    && unzip ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip -d ${INSTALL_DIR} \ 
    && rm ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip
ENV GLASSFISH_HOME ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}/glassfish
ENV DEPLOYMENT_DIR ${GLASSFISH_HOME}/domains/domain1/autodeploy
WORKDIR ${GLASSFISH_HOME}/bin
ENTRYPOINT asadmin start-domain --verbose ${DOMAIN_NAME} 
EXPOSE 4848 8009 8080 8181
