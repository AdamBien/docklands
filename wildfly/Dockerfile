FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION wildfly-10.0.0.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/${VERSION}
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/
RUN curl -O https://download.jboss.org/wildfly/10.0.0.Final/${VERSION}.zip
RUN unzip ${VERSION}.zip -d ${INSTALL_DIR}
RUN rm ${WILDFLY_HOME}/bin/standalone.conf
ADD standalone.conf ${WILDFLY_HOME}/bin/
RUN chmod a+x ${WILDFLY_HOME}/bin/standalone.sh
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0
EXPOSE 8080
