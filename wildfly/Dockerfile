FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION 11.0.0.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly-${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/
RUN curl -O https://download.jboss.org/wildfly/${VERSION}/wildfly-${VERSION}.zip \
    && unzip wildfly-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm wildfly-${VERSION}.zip \
    && chmod a+x ${WILDFLY_HOME}/bin/standalone.sh
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080
