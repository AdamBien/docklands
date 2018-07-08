FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="OpenLiberty Kernel Development Builds"
ENV RELEASE 2018-07-07_1412
ENV VERSION 20180707-1300
ENV INSTALL_DIR /opt

# Download OpenLiberty
ADD https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/nightly/${RELEASE}/openliberty-all-${VERSION}.zip .
RUN unzip openliberty-all-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm openliberty-all-${VERSION}.zip

ENV OPENLIBERTY_HOME ${INSTALL_DIR}/wlp/usr/servers/defaultServer
ENV CONFIG ${OPENLIBERTY_HOME}
ENV DEPLOYMENT_DIR ${OPENLIBERTY_HOME}/dropins
EXPOSE 9080 9443
ENTRYPOINT /opt/wlp/bin/server run defaultServer
