# RUN zookeeper and kafka
docker rm -f zookeeper && docker run --net kafka -p 2181:2181 --name zookeeper airhacks/kafka-zookeeper   
docker rm -f kafka-server && docker run --net kafka -p 9092:9092 --name kafka-server airhacks/kafka-server
