FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Keycloak Standalone server distribution"
ENV VERSION 8.0.1
ENV INSTALL_DIR /opt
ENV KEYCLOAK_HOME ${INSTALL_DIR}/keycloak-${VERSION}
RUN curl -O  https://downloads.jboss.org/keycloak/${VERSION}/keycloak-${VERSION}.zip \
    && unzip keycloak-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm keycloak-${VERSION}.zip \
    && chmod a+x ${KEYCLOAK_HOME}/bin/standalone.sh
RUN ${KEYCLOAK_HOME}/bin/add-user-keycloak.sh -r master -u admin -p adminadmin
ENTRYPOINT ${KEYCLOAK_HOME}/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080 9990