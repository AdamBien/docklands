FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Kibana"
ENV INSTALL_DIR kibana
RUN mkdir ${INSTALL_DIR}
RUN curl https://artifacts.elastic.co/downloads/kibana/kibana-6.0.1-linux-x86_64.tar.gz | tar xvz -C ${INSTALL_DIR} --strip-components=1
ENTRYPOINT ${INSTALL_DIR}/bin/kibana
EXPOSE 5601

