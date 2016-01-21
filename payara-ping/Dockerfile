# For more information about ping see: https://github.com/AdamBien/ping/
FROM airhacks/payara

MAINTAINER Adam Bien, adam-bien.com

COPY ping.war start.sh ./

RUN chmod u+x start.sh

ENTRYPOINT ./start.sh

EXPOSE 8080 5701 4848

