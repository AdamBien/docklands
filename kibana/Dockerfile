FROM airhacks/java
ENV INSTALL_DIR kibana
RUN mkdir ${INSTALL_DIR}
RUN curl https://download.elastic.co/kibana/kibana/kibana-4.6.1-linux-x86_64.tar.gz | tar xvz -C ${INSTALL_DIR} --strip-components=1
RUN echo -e 'elasticsearch.url: "http://elasticsearch:9200"' >> ${INSTALL_DIR}/config/kibana.yml
ENTRYPOINT ${INSTALL_DIR}/bin/kibana
EXPOSE 5601

