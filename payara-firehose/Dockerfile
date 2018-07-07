FROM airhacks/payara
LABEL maintainer="Adam Bien, adam-bien.com" description="Payara Server Full with enabled monitoring and firehose sidecar"
RUN echo ${DOMAIN_NAME}
RUN curl -O -L https://github.com/AdamBien/firehose/releases/download/v0.0.3/firehose.war
RUN asadmin start-domain ${DOMAIN_NAME} && \
    asadmin enable-monitoring --modules web-container:ejb-container:http-service:jersey:transaction-service:jvm:thread-pool && \
    asadmin create-network-listener --listenerport 8090 --protocol http-listener-1 --threadpool admin-thread-pool --enabled=true monitoring-listener && \
    asadmin deploy firehose.war && \
    asadmin stop-domain ${DOMAIN_NAME}
EXPOSE 8090