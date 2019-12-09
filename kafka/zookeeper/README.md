docker rm -f zookeeper && docker run --net kafka -p 2181:2181 --name zookeeper airhacks/kafka-zookeeper
