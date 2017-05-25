FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV INSTALL_DIR .
ENV VERSION apache-archiva-2.2.3
RUN curl -O http://ftp.fau.de/apache/archiva/2.2.3/binaries/${VERSION}-bin.zip
RUN unzip ${VERSION}-bin.zip -d ${INSTALL_DIR}
ENTRYPOINT ${INSTALL_DIR}/${VERSION}/bin/archiva console
EXPOSE 8080