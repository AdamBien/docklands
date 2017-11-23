FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
ENV MAX_RAM 512m
RUN echo ${DOMAIN_NAME}
COPY firehose.war .
RUN asadmin start-domain ${DOMAIN_NAME} && \
    asadmin deploy firehose.war && \
    asadmin stop-domain ${DOMAIN_NAME}


