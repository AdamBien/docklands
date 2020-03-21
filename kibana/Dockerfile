FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Kibana"
RUN useradd kibana
USER kibana
ENV INSTALL_DIR /home/kibana
RUN curl https://artifacts.elastic.co/downloads/kibana/kibana-7.6.1-linux-x86_64.tar.gz | tar xvz -C ${INSTALL_DIR} --strip-components=1
ENV SERVER_HOST 0.0.0.0
ENV ELASTICSEARCH_HOSTS http://elasticsearch:9200
ENTRYPOINT ${INSTALL_DIR}/bin/kibana
EXPOSE 5601

