#RUN
docker rm -f kafka-oracle-connect-configured && docker run --net kafka -p 8083:8083 --name kafka-oracle-connect-configured airhacks/kafka-oracle-connect-configured