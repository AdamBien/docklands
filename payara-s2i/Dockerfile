FROM airhacks/java-s2i
LABEL maintainer="Adam Bien, adam-bien.com" description="Payara5 Server Full S2I for OpenShift"
ENV PAYARA_ARCHIVE payara5
ENV DOMAIN_NAME domain1
ENV INSTALL_DIR /opt
RUN curl -o ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -L https://s3-eu-west-1.amazonaws.com/payara.fish/Payara+Downloads/5.191/payara-5.191.zip \ 
    && unzip ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip -d ${INSTALL_DIR} \ 
    && rm ${INSTALL_DIR}/${PAYARA_ARCHIVE}.zip
ENV PAYARA_HOME ${INSTALL_DIR}/${PAYARA_ARCHIVE}/glassfish
ENV DEPLOYMENT_DIR ${INSTALL_DIR}/deploy
RUN mkdir ${DEPLOYMENT_DIR} \
    && chown -R 1001:0 ${INSTALL_DIR} \
    && chmod -R a+rw ${INSTALL_DIR}
ADD start.sh .
RUN chmod a+x start.sh
USER 1001
EXPOSE 4848 8009 8080 8181
