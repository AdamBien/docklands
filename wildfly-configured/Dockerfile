FROM airhacks/widlfly
MAINTAINER Adam Bien, adam-bien.com
ENV DEPLOYMENT_DIR ${WILDFLY_HOME}/standalone/deployments/
RUN rm ${WILDFLY_HOME}/bin/standalone.conf
ADD standalone.conf ${WILDFLY_HOME}/bin/