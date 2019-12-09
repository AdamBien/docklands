# RUN
docker rm -f postgres-debezium && docker run --net kafka -d -p 5432:5432 --name postgres-debezium airhacks/postgres-debezium