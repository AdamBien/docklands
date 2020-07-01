FROM airhacks/wildfly
LABEL maintainer="Adam Bien, adam-bien.com" description="Sample for WildFly with project-specific configuration"
RUN rm ${WILDFLY_HOME}/standalone/configuration/standalone.xml
ADD standalone.xml ${WILDFLY_HOME}/standalone/configuration/