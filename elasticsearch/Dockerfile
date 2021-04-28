FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="ElasticSearch"
RUN useradd elasticsearch
ENV INSTALL_DIR /home/elasticsearch
ENV VERSION 7.12.1
USER elasticsearch
WORKDIR /home/elasticsearch
RUN curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${VERSION}-linux-x86_64.tar.gz \
    && tar xvf elasticsearch-${VERSION}-linux-x86_64.tar.gz -C ${INSTALL_DIR}
COPY elasticsearch.yml elasticsearch-${VERSION}/config
ENTRYPOINT ${INSTALL_DIR}/elasticsearch-${VERSION}/bin/elasticsearch
EXPOSE 9200 9300