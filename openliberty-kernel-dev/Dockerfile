FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="OpenLiberty Kernel Development Builds"
ENV RELEASE 2017-12-10_0757
ENV VERSION 17.0.0.4-201712100749
ENV INSTALL_DIR /opt/

# Download OpenLiberty
ENV OPENLIBERTY_HOME ${INSTALL_DIR}/openliberty-${VERSION}
ENV DEPLOYMENT_DIR ${OPENLIBERTY_HOME}/standalone/deployments/
RUN curl -O https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/nightly//${RELEASE}/openliberty-all-${VERSION}.zip \
    && unzip openliberty-all-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm openliberty-all-${VERSION}.zip
ENV CONFIG /opt/wlp/usr/servers/defaultServer/
EXPOSE 9080 9443
ENTRYPOINT /opt/wlp/bin/server run defaultServer



