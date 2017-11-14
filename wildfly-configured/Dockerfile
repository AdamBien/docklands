FROM airhacks/wildfly
LABEL maintainer="Adam Bien, adam-bien.com" description="Sample for WildFly with project-specific configuration"
RUN rm ${WILDFLY_HOME}/bin/standalone.conf
ADD standalone.conf ${WILDFLY_HOME}/bin/