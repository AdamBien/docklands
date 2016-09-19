FROM airhacks/payara-configured
MAINTAINER Adam Bien, adam-bien.com
ENV MONITORING_LEVEL HIGH
ENV ADMIN_PASSWORD adminadmin
RUN asadmin start-domain ${DOMAIN_NAME} && \
    echo "AS_ADMIN_PASSWORD=" > payarapwd && \
    echo "AS_ADMIN_NEWPASSWORD=${ADMIN_PASSWORD}" >> payarapwd  && \
    cat payarapwd  && \
    asadmin --user=admin --passwordfile=payarapwd change-admin-password && \
    echo "AS_ADMIN_PASSWORD=${ADMIN_PASSWORD}" > payarapwd && \
    asadmin --passwordfile=payarapwd enable-secure-admin && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.monitoring-enabled=true && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.connector-connection-pool=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.connector-service=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.ejb-container=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.http-service=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.jdbc-connection-pool=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.jersey=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.jpa=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.jvm=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.security=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.thread-pool=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.transaction-service=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.web-container=${MONITORING_LEVEL} && \
    asadmin --passwordfile=payarapwd set server.monitoring-service.module-monitoring-levels.web-services-container=${MONITORING_LEVEL} && \
    asadmin stop-domain ${DOMAIN_NAME}

