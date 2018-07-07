FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Plain Maven 3.5.X"
ENV INSTALL_DIR /opt
ENV VERSION 3.5.2
RUN curl -O http://www-eu.apache.org/dist/maven/maven-3/${VERSION}/binaries/apache-maven-${VERSION}-bin.zip
RUN unzip apache-maven-${VERSION}-bin.zip -d ${INSTALL_DIR}
ENV PATH=/opt/apache-maven-${VERSION}/bin:$PATH
