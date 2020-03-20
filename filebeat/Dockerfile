FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Elastic Filebeat"
RUN useradd filebeat
ENV INSTALL_DIR /home/filebeat
ENV VERSION 7.6.1
RUN curl -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-${VERSION}-linux-x86_64.tar.gz \
    && tar xzvf filebeat-${VERSION}-linux-x86_64.tar.gz --strip-components 1 -C ${INSTALL_DIR}/
COPY filebeat.yml /usr/share/filebeat/filebeat.yml
USER root
#RUN chown root:filebeat /usr/share/filebeat/filebeat.yml
#USER filebeat
ENTRYPOINT ${INSTALL_DIR}/filebeat -c /usr/share/filebeat/filebeat.yml -e -v
