FROM airhacks/java-s2i
LABEL maintainer="Adam Bien, adam-bien.com" description="Payara5 Micro S2I for OpenShift"
ENV VERSION 5.192
ENV PAYARA_JAR payara-micro-${VERSION}.jar
ENV INSTALL_DIR /opt
RUN curl -o ${INSTALL_DIR}/${PAYARA_JAR} -L https://s3-eu-west-1.amazonaws.com/payara.fish/Payara+Downloads/${VERSION}/${PAYARA_JAR}
ENV DEPLOYMENT_DIR ${INSTALL_DIR}/deploy
RUN mkdir -p ${DEPLOYMENT_DIR}/deploy \
    && chown -R 1001:0 ${INSTALL_DIR} \
    && chmod -R a+rw ${INSTALL_DIR}
USER 1001
ENTRYPOINT java -jar ${INSTALL_DIR}/${PAYARA_JAR} --deploymentDir ${DEPLOYMENT_DIR}
EXPOSE 8080 8181
