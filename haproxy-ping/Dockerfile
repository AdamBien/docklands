FROM airhacks/haproxy
MAINTAINER Adam Bien, adam-bien.com
ADD haproxy.cfg /etc/haproxy/haproxy.cfg
EXPOSE 8080 8989
ENTRYPOINT haproxy -V -f /etc/haproxy/haproxy.cfg