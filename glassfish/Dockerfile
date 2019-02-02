FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Eclipse Jakarta EE Glassfish v5 release image"
ENV GLASSFISH_ARCHIVE glassfish5
ENV DOMAIN_NAME domain1
ENV INSTALL_DIR /opt
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN curl -o ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip -L http://mirrors.xmission.com/eclipse/glassfish/glassfish-5.1.0.zip \ 
    && unzip ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip -d ${INSTALL_DIR} \ 
    && rm ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}.zip \
    && chown -R serveradmin:serveradmin /opt \
    && chmod -R a+rw /opt
ENV GLASSFISH_HOME ${INSTALL_DIR}/${GLASSFISH_ARCHIVE}/glassfish
ENV DEPLOYMENT_DIR ${GLASSFISH_HOME}/domains/domain1/autodeploy
WORKDIR ${GLASSFISH_HOME}/bin
ENTRYPOINT asadmin start-domain --verbose ${DOMAIN_NAME} 
USER serveradmin
EXPOSE 4848 8009 8080 8181
