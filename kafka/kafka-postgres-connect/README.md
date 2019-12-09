#RUN
docker rm -f kafka-postgres-connect && docker run --net kafka -p 8083:8083 --name kafka-postgres-connect airhacks/kafka-postgres-connect