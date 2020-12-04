FROM fedora:32
LABEL maintainer="Adam Bien, adam-bien.com" description="PostgreSQL"
ENV INSTALL_DIR /data
ENV DB airhacksdb
ENV USER airhacks
RUN mkdir -m a=rwx ${INSTALL_DIR}
ENV PGDATA /data
ENV VERSION 12
RUN dnf install -y postgresql-server postgresql-contrib postgresql-devel
RUN chown postgres ${INSTALL_DIR}
USER postgres
RUN initdb -D ${INSTALL_DIR}
RUN echo "shared_preload_libraries = 'pg_stat_statements'"  >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "track_activity_query_size = 2048" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "pg_stat_statements.track = all" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "listen_addresses='*'" >> ${INSTALL_DIR}/postgresql.conf

RUN echo "host all  all  0.0.0.0/0  md5" >> ${INSTALL_DIR}/pg_hba.conf
RUN pg_ctl -D /data start -w &&\
    psql --command "CREATE USER airhacks WITH SUPERUSER PASSWORD 'airhacks';" &&\
    createdb -O ${USER} ${DB}
EXPOSE 5432
CMD ["postgres", "-D", "/data", "-c", "config_file=/data/postgresql.conf"]

