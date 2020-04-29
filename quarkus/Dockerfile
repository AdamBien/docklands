FROM airhacks/java:11
LABEL maintainer="Adam Bien, adam-bien.com" description="quarkus.io SkimmedJAR"

ENV DEPLOY_DIR /opt
ENV INSTALL_DIR ${DEPLOY_DIR}/lib

RUN mkdir -p ${DEPLOYMENT_DIR} \
    mkdir -p ${INSTALL_DIR} \
    && chown -R 1001:0 ${INSTALL_DIR} \
    && chmod -R a+rw ${INSTALL_DIR}

COPY target/lib/* ${INSTALL_DIR}/
ENTRYPOINT java -jar -Dquarkus.http.host=0.0.0.0  ${DEPLOY_DIR}/supersonic-runner.jar
EXPOSE 8080
