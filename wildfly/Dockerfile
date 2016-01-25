FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION wildfly-9.0.2.Final
ENV INSTALL_DIR /opt
ENV WILDFLY_HOME ${INSTALL_DIR}/${VERSION}
RUN curl -O http://download.jboss.org/wildfly/9.0.2.Final/${VERSION}.zip
RUN unzip ${VERSION}.zip -d ${INSTALL_DIR}
RUN rm ${WILDFLY_HOME}/bin/standalone.conf
ADD standalone.conf ${WILDFLY_HOME}/bin/
RUN chmod a+x ${WILDFLY_HOME}/bin/standalone.sh
ADD start.sh ./start.sh
RUN chmod +x ./start.sh
ENTRYPOINT ./start.sh
EXPOSE 8080
