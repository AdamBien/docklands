FROM airhacks/payara-configured
MAINTAINER Adam Bien, adam-bien.com
ENV MONITORING_LEVEL HIGH
RUN asadmin start-domain ${DOMAIN_NAME} && \
    asadmin set server.monitoring-service.monitoring-enabled=true && \
    asadmin set server.monitoring-service.module-monitoring-levels.connector-connection-pool=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.connector-service=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.ejb-container=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.http-service=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.jdbc-connection-pool=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.jersey=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.jpa=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.jvm=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.security=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.thread-pool=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.transaction-service=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.web-container=${MONITORING_LEVEL} && \
    asadmin set server.monitoring-service.module-monitoring-levels.web-services-container=${MONITORING_LEVEL} && \
    asadmin stop-domain ${DOMAIN_NAME}

