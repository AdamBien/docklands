FROM airhacks/java
MAINTAINER Adam Bien, adam-bien.com
RUN yum -y install epel-release
RUN yum -y install nginx \
    && yum clean all
ENTRYPOINT nginx -g "daemon off;"
EXPOSE 80
