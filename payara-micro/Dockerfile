FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
ENV PAYARA_ARCHIVE payara-micro-5.182
ENV INSTALL_DIR /opt
ENV PAYARA_HOME ${INSTALL_DIR}
ENV DEPLOYMENT_DIR ${PAYARA_HOME}
ADD "https://cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=21e00628-5d9e-400a-9805-1fc99fe0de87&placement_guid=0c1037e0-adaf-4401-b888-05088602db6a" ${INSTALL_DIR}/${PAYARA_ARCHIVE}.jar
ENTRYPOINT java -jar ${PAYARA_ARCHIVE}.jar --deploy ${ARCHIVE_NAME}
WORKDIR ${INSTALL_DIR}
EXPOSE 8080 5900
