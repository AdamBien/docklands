FROM airhacks/payara-configured
MAINTAINER Adam Bien, adam-bien.com
ADD start.sh .
RUN chmod u+x start.sh
# For more information about ping see: https://github.com/AdamBien/ping/
ADD ping.war .
ENTRYPOINT ./start.sh


