FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
RUN mkdir -m a=rwx /data
#VOLUME ["/data"]
ENV PGDATA /data
RUN yum update -y \
  && yum install -y https://download.postgresql.org/pub/repos/yum/9.5/redhat/rhel-7-x86_64/pgdg-centos95-9.5-2.noarch.rpm \
  && yum install -y postgresql95-server postgresql95-contrib  \
  && yum clean all
RUN chown postgres /data
USER postgres
RUN /usr/pgsql-9.5/bin/initdb -D /data
EXPOSE 5432
CMD ["/usr/pgsql-9.5/bin/postgres", "-D", "/data", "-c", "config_file=/data/postgresql.conf"]

