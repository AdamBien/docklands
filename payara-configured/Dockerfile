FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
ENV MAX_RAM 512m
RUN echo ${DOMAIN_NAME}
RUN asadmin start-domain ${DOMAIN_NAME} && \
    asadmin delete-jvm-options -Xmx512m  && \
    asadmin create-jvm-options -Xms${MAX_RAM}  && \
    asadmin create-jvm-options -Xmx${MAX_RAM}  && \
    asadmin stop-domain ${DOMAIN_NAME}


