FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION 10.1.0.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/wildfly-${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/

USER root

RUN groupadd -r jboss -g 1000 && useradd -u 1000 -r -g jboss -m -d ${WILDFLY_HOME} -s /sbin/nologin -c "JBoss user" jboss && \
    chmod 755 ${WILDFLY_HOME}


RUN curl -O https://download.jboss.org/wildfly/${VERSION}/wildfly-${VERSION}.zip \
    && unzip wildfly-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm wildfly-${VERSION}.zip \
    && chown -R jboss:0 ${WILDFLY_HOME} \
    && chmod -R g+rw ${WILDFLY_HOME}

ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080
