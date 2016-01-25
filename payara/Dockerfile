FROM airhacks/java

MAINTAINER Adam Bien, adam-bien.com

ENV PAYARA_ARCHIVE=payara41 \
    DOMAIN_NAME=domain1 \
    INSTALL_DIR=/opt \
    PAYARA_HOME=/opt/payara41/glassfish \
    EXEC=/opt/payara41/glassfish/bin \
    DEPLOYMENT_DIR=/opt/payara41/glassfish/domains/domain1/autodeploy/

RUN curl -o ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -L http://bit.ly/1Gm0GIw && \
    unzip ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -d /opt 

EXPOSE 4848 8009 8080 8181
