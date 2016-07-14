FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
RUN useradd elasticsearch
ENV INSTALL_DIR /home/elasticsearch
ENV VERSION 5.0.0-alpha4
USER elasticsearch
RUN cd /home/elasticsearch \
    && curl -O https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/zip/elasticsearch/${VERSION}/elasticsearch-${VERSION}.zip \
    && unzip elasticsearch-${VERSION}.zip -d ${INSTALL_DIR}
ENTRYPOINT ${INSTALL_DIR}/elasticsearch-${VERSION}/bin/elasticsearch
EXPOSE 9200