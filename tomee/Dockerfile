FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV ARCHIVE apache-tomee-plus-7.0.0-M1
ENV INSTALL_DIR /opt
ENV TOMEE_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -o ${TOMEE_HOME}.zip -L http://mirrors.ocf.berkeley.edu/apache/tomee/tomee-7.0.0-M1/apache-tomee-7.0.0-M1-plus.zip
RUN unzip ${TOMEE_HOME}.zip -d /opt
ENV DEPLOYMENT_DIR ${TOMEE_HOME}/webapps/
ENTRYPOINT ${TOMEE_HOME}/bin/catalina.sh run
EXPOSE 8080
