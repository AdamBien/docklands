FROM airhacks/openj9
LABEL maintainer="Adam Bien, adam-bien.com" description="OpenLiberty Kernel Development Builds"
ENV RELEASE 2018-09-05_2337
ENV VERSION 18.0.0.3
ENV INSTALL_DIR /opt
ENV CONFIG ${INSTALL_DIR}/wlp/usr/servers/defaultServer/
ENV DEPLOYMENT_DIR ${CONFIG}/dropins/

RUN curl -O https://public.dhe.ibm.com/ibmdl/export/pub/software/openliberty/runtime/release/${RELEASE}/openliberty-${VERSION}.zip \
    && unzip openliberty-${VERSION}.zip -d ${INSTALL_DIR} \
    && rm openliberty-${VERSION}.zip
EXPOSE 9080 9443
ENTRYPOINT /opt/wlp/bin/server run defaultServer


