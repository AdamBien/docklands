FROM centos:8
MAINTAINER Adam Bien, adam-bien.com
ENV INSTALL_DIR /data
ENV DB airhacksdb
ENV USER airhacks
RUN mkdir -m a=rwx ${INSTALL_DIR}
#VOLUME ${INSTALL_DIR}
ENV PGDATA /data
ENV VERSION 12
#RUN yum update -y \
#  && dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-8-x86_64/pgdg-redhat-repo-latest.noarch.rpm \
#  && dnf install -y postgresql12  \
#  && yum clean all
RUN dnf install -y postgresql-server
RUN chown postgres ${INSTALL_DIR}
USER postgres
RUN initdb -D ${INSTALL_DIR}
RUN echo "listen_addresses='*'" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "host all  all  0.0.0.0/0  md5" >> ${INSTALL_DIR}/pg_hba.conf
RUN pg_ctl -D /data start -w &&\
    psql --command "CREATE USER airhacks WITH SUPERUSER PASSWORD 'airhacks';" &&\
    createdb -O ${USER} ${DB}
EXPOSE 5432
CMD ["postgres", "-D", "/data", "-c", "config_file=/data/postgresql.conf"]

