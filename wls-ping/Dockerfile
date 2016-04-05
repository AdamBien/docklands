FROM 1221-domain
#checkout first: http://www.adam-bien.com/roller/abien/entry/how_to_dockerize_weblogic_for
MAINTAINER Adam Bien, adam-bien.com
ENV DEPLOYMENT_DIR ${DOMAIN_HOME}/autodeploy/
COPY ping.war ${DEPLOYMENT_DIR}
RUN export PRODUCTION_MODE="false"
ENTRYPOINT startWebLogic.sh -Dweblogic.ProductionModeEnabled=false
