FROM airhacks/java:14
LABEL maintainer="Adam Bien, adam-bien.com" description="helidon.io SkimmedJAR"

ENV DEPLOYMENT_DIR /opt
ENV INSTALL_DIR ${DEPLOYMENT_DIR}/libs

RUN mkdir -p ${DEPLOYMENT_DIR} \
    mkdir -p ${INSTALL_DIR} \
    && chown -R 1001:0 ${INSTALL_DIR} \
    && chmod -R a+rw ${INSTALL_DIR}
USER 1001
ENTRYPOINT java --enable-preview -jar /opt/helidon.jar
EXPOSE 8080

