FROM airhacks/java:14
LABEL maintainer="Adam Bien, adam-bien.com" description="quarkus.io SkimmedJAR"

ENV DEPLOYMENT_DIR /opt/
ENV INSTALL_DIR ${DEPLOYMENT_DIR}/lib/

RUN mkdir -p ${DEPLOYMENT_DIR} \
    mkdir -p ${INSTALL_DIR}

COPY target/lib/*  ${INSTALL_DIR}
COPY target/supersonic-runner.jar ${DEPLOYMENT_DIR}

RUN chown -R 1001:0 ${INSTALL_DIR} \
    && chmod -R a+rw ${INSTALL_DIR}

USER 1001
ENTRYPOINT java --enable-preview -XshowSettings:vm -Djava.util.logging.manager=org.jboss.logmanager.LogManager -Dquarkus.http.host=0.0.0.0 -jar  ${DEPLOYMENT_DIR}/supersonic-runner.jar
EXPOSE 8080
