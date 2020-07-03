FROM airhacks/wildfly
LABEL maintainer="Adam Bien, adam-bien.com" description="WildFly with microprofile-standalone.xml"
RUN rm ${WILDFLY_HOME}/standalone/configuration/standalone.xml
ADD standalone.xml ${WILDFLY_HOME}/standalone/configuration/