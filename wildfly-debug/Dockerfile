FROM airhacks/wildfly
MAINTAINER Adam Bien, adam-bien.com
RUN rm ${WILDFLY_HOME}/bin/standalone.conf
ADD standalone.conf ${WILDFLY_HOME}/bin/
EXPOSE 8787
