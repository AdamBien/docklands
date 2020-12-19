#RUN
docker rm -f kafka-oracle-connect && docker run --net kafka -p 8083:8083 --name kafka-oracle-connect airhacks/kafka-oracle-connect