FROM 1221-domain
MAINTAINER Adam Bien, adam-bien.com
ENV DEPLOYMENT_DIR user_projects/domains/base_domain/autodeploy/
COPY ping.war ${DEPLOYMENT_DIR}
RUN export PRODUCTION_MODE="false"
ENTRYPOINT startWebLogic.sh -Dweblogic.ProductionModeEnabled=false
