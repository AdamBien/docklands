FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
RUN useradd elasticsearch
ENV INSTALL_DIR /home/elasticsearch
ENV VERSION 6.4.1
USER elasticsearch
WORKDIR /home/elasticsearch
RUN curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}.zip \
    && unzip elasticsearch-${VERSION}.zip -d ${INSTALL_DIR}
COPY elasticsearch.yml elasticsearch-${VERSION}/config
ENTRYPOINT ${INSTALL_DIR}/elasticsearch-${VERSION}/bin/elasticsearch
EXPOSE 9200 9300