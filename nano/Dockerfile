FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV INSTALL_DIR /opt
RUN curl -o ${INSTALL_DIR}/nano.jar -L http://github.com/AdamBien/nano/releases/download/v0.0.1/nano.jar
WORKDIR ${INSTALL_DIR}
ENTRYPOINT java -jar nano.jar
EXPOSE 4242

