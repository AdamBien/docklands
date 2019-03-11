FROM airhacks/java
LABEL maintainer="Adam Bien, adam-bien.com" description="Payara5 Server Full"
ENV INSTALL_DIR /opt
RUN useradd -b /opt -m -s /bin/sh -d ${INSTALL_DIR} serveradmin && echo serveradmin:serveradmin | chpasswd
RUN cd ${INSTALL_DIR} \
    && curl -O -L http://mirrors.jenkins.io/war-stable/latest/jenkins.war \ 
    && chown -R serveradmin:serveradmin /opt \
    && chmod -R a+rw /opt
WORKDIR ${INSTALL_DIR}
USER serveradmin
ENTRYPOINT java -jar jenkins.war
EXPOSE 8080
