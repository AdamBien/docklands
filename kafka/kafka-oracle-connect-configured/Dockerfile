FROM airhacks/kafka-oracle-connect
LABEL maintainer="Adam Bien, adam-bien.com" description="Kafka Oracle Connector with Configuration"
COPY connector.properties ${KAFKA_HOME}/config/
COPY worker.properties ${KAFKA_HOME}/config/
COPY connect-log4j.properties ${KAFKA_HOME}/config/