FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV ARCHIVE apache-tomee-plus-7.0.2
ENV INSTALL_DIR /opt
ENV SERVER_HOME ${INSTALL_DIR}/${ARCHIVE}
RUN curl -o ${SERVER_HOME}.zip -L http://repo.maven.apache.org/maven2/org/apache/tomee/apache-tomee/7.0.2/apache-tomee-7.0.2-plus.zip /
    && unzip ${SERVER_HOME}.zip -d /opt /
    && rm ${SERVER_HOME}.zip
ENV DEPLOYMENT_DIR ${SERVER_HOME}/webapps/
ENTRYPOINT ${SERVER_HOME}/bin/catalina.sh run
EXPOSE 8080
