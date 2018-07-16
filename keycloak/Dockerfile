FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Keycloak Standalone server distribution"
ENV VERSION 4.1.0.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/keycloak-${VERSION}
RUN curl -O  https://downloads.jboss.org/keycloak/${VERSION}/keycloak-${VERSION}.zip \
    && unzip keycloak-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm keycloak-${VERSION}.zip \
    && chmod a+x ${WILDFLY_HOME}/bin/standalone.sh
RUN ${WILDFLY_HOME}/bin/add-user-keycloak.sh -r master -u admin -p adminadmin
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080 9990