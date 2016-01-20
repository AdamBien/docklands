FROM airhacks/payara
MAINTAINER Adam Bien, adam-bien.com
ADD start.sh .
RUN chmod u+x start.sh
ADD ping.war .
ENTRYPOINT ./start.sh
EXPOSE 8080 5701 4848

