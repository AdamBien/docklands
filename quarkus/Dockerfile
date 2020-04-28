FROM airhacks/java:11
LABEL maintainer="Adam Bien, adam-bien.com" description="quarkus.io SkimmedJAR"

ENV DEPLOY_DIR /opt
ENV INSTALL_DIR ${DEPLOY_DIR}/lib
RUN useradd -b ${INSTALL_DIR} -m -s /bin/sh -d ${INSTALL_DIR} quarkus && echo quarkus:quarkus | chpasswd

COPY target/lib ${INSTALL_DIR}
ENTRYPOINT java -jar -Dquarkus.http.host=0.0.0.0  ${DEPLOY_DIR}/supersonic-runner.jar
EXPOSE 8080
