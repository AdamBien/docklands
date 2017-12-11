FROM airhacks/wildfly:10.1.0.Final
LABEL maintainer="Adam Bien, adam-bien.com" description="jBPM on WildFly"
ENV VERSION=7.4.1.Final
ENV MAVEN_VERSION 3.5.2
RUN cd ${INSTALL_DIR}  \
    && curl -O http://www-eu.apache.org/dist/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.zip
RUN unzip ${INSTALL_DIR}/apache-maven-${MAVEN_VERSION}-bin.zip -d ${INSTALL_DIR}
ENV PATH=/opt/apache-maven-${MAVEN_VERSION}/bin:$PATH
RUN curl -o ${DEPLOYMENT_DIR}/jbpm-console.war https://repository.jboss.org/nexus/content/groups/public-jboss/org/kie/kie-wb/${VERSION}/kie-wb-${VERSION}-wildfly10.war
RUN curl -o ${DEPLOYMENT_DIR}/jbpm-casemgmt.war https://repository.jboss.org/nexus/content/groups/public-jboss/org/jbpm/jbpm-wb-case-mgmt-showcase/${VERSION}/jbpm-wb-case-mgmt-showcase-${VERSION}-wildfly10.war
RUN curl -o ${DEPLOYMENT_DIR}/kie-server.war http://repository.jboss.org/nexus/content/groups/public-jboss/org/kie/server/kie-server/${VERSION}/kie-server-${VERSION}-ee7.war
COPY users.properties ${CONFIGURATION_DIR}
COPY roles.properties ${CONFIGURATION_DIR}
COPY standalone-full-wildfly-10.1.0.Final.xml ${CONFIGURATION_DIR}/standalone-full.xml
COPY standalone-wildfly-10.1.0.Final.xml ${CONFIGURATION_DIR}/standalone.xml
COPY standalone.conf ${WILDFLY_HOME}/bin/
USER root
RUN chmod -R a+rw ${INSTALL_DIR}
USER serveradmin
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -c standalone-full.xml -b=0.0.0.0
EXPOSE 8080 9990
