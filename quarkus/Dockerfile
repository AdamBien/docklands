FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="quarkus.io SkimmedJAR"
ENV DEPLOY_DIR /opt
ENV INSTALL_DIR ${DEPLOY_DIR}/lib
COPY lib ${INSTALL_DIR}
ENTRYPOINT java -jar -Dquarkus.http.host=0.0.0.0  ${DEPLOY_DIR}/quarkus-runner.jar
EXPOSE 8080
