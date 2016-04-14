FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV ARCHIVE apache-tomee-plus-7.0.0-M3
ENV INSTALL_DIR /opt
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -o ${SERVER_HOME}.zip -L http://mirrors.ocf.berkeley.edu/apache/tomee/tomee-7.0.0-M3/apache-tomee-7.0.0-M3-plus.zip
RUN unzip ${SERVER_HOME}.zip -d /opt
ENV DEPLOYMENT_DIR ${SERVER_HOME}/webapps/
ENTRYPOINT ${SERVER_HOME}/bin/catalina.sh run
EXPOSE 8080
