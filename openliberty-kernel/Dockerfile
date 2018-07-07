FROM airhacks/java
LABEL maintainer="Tobias N. Sasse, @tnsasse and Adam Bien, adam-bien.com" description="OpenLiberty Kernel"
ENV RELEASE 2018-06-19_0502
ENV VERSION 18.0.0.2
ENV INSTALL_DIR /opt/

# Download OpenLiberty
ENV OPENLIBERTY_HOME ${INSTALL_DIR}/openliberty-${VERSION}
ENV DEPLOYMENT_DIR ${OPENLIBERTY_HOME}/standalone/deployments/
RUN curl -O https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/release/${RELEASE}/openliberty-${VERSION}.zip \
    && unzip openliberty-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm openliberty-${VERSION}.zip
ENV CONFIG /opt/wlp/usr/servers/defaultServer/
EXPOSE 9080 9443
ENTRYPOINT /opt/wlp/bin/server run defaultServer
