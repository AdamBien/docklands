FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com"
ENV PAYARA_ARCHIVE payara41
ENV DOMAIN_NAME domain1
ENV PAYARA_VERSION 4.1.2.173
ENV INSTALL_DIR /
RUN curl -o ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -L https://s3-eu-west-1.amazonaws.com/payara.fish/Payara+Downloads/Payara+${PAYARA_VERSION}/payara-${PAYARA_VERSION}.zip \ 
    && unzip ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -d ${INSTALL_DIR} \ 
    && rm ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip
ENV PAYARA_HOME ${INSTALL_DIR}/payara41/glassfish
ENV DEPLOYMENT_DIR ${INSTALL_DIR}deploy
RUN mkdir ${DEPLOYMENT_DIR}
WORKDIR ${PAYARA_HOME}/bin
ADD start.sh .
RUN chmod a+x start.sh
ENTRYPOINT start.sh
EXPOSE 4848 8009 8080 8181
