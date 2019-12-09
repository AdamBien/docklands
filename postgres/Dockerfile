FROM fedora:30
LABEL maintainer="Adam Bien, adam-bien.com" description="PostgreSQL"
ENV INSTALL_DIR /data
ENV DB airhacksdb
ENV USER airhacks
RUN mkdir -m a=rwx ${INSTALL_DIR}
ENV PGDATA /data
ENV VERSION 12
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

