# RUN
docker rm -f kafka-server && docker run --net kafka -p 9092:9092 --name kafka-server airhacks/kafka-server