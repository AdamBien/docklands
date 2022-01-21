FROM fedora:35
LABEL maintainer="Adam Bien, adam-bien.com" description="PostgreSQL with Logical Decoding for Debezium"
ENV INSTALL_DIR /data
ENV DB airhacksdb
ENV USER airhacks
RUN mkdir -m a=rwx ${INSTALL_DIR}
#VOLUME ${INSTALL_DIR}
ENV PGDATA /data
ENV VERSION 12
RUN dnf install -y postgresql-server postgresql-contrib postgresql-devel &&\
    dnf -y install postgres-decoderbufs
RUN chown postgres ${INSTALL_DIR}
RUN export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/lib64/pgsql/"
USER postgres
RUN initdb -D ${INSTALL_DIR}
RUN echo "listen_addresses='*'" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "shared_preload_libraries = 'decoderbufs'" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "wal_level = logical" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "max_wal_senders = 4" >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "max_replication_slots = 4 " >> ${INSTALL_DIR}/postgresql.conf &&\
    echo "host all  all  0.0.0.0/0  md5" >> ${INSTALL_DIR}/pg_hba.conf &&\
    echo "local   replication     airhacks                          trust" >> ${INSTALL_DIR}/pg_hba.conf &&\
    echo "host    replication     airhacks  127.0.0.1/32            trust" >> ${INSTALL_DIR}/pg_hba.conf &&\
    echo "host    replication     airhacks  ::1/128                 trust" >> ${INSTALL_DIR}/pg_hba.conf
RUN pg_ctl -D /data start -w &&\
    psql --command "CREATE USER airhacks WITH SUPERUSER PASSWORD 'airhacks';" &&\
    psql --command "CREATE ROLE name REPLICATION LOGIN;" &&\
    createdb -O ${USER} ${DB}
EXPOSE 5432
CMD ["postgres", "-D", "/data", "-c", "config_file=/data/postgresql.conf"]

