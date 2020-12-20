#!/bin/sh
sleep ${START_DELAY_IN_SECONDS:-0}
echo "Waiting: ${START_DELAY_IN_SECONDS} seconds before start"
echo "KAFKA_HOME: ${KAFKA_HOME}"
${KAFKA_HOME}/bin/connect-standalone.sh ${KAFKA_HOME}/config/worker.properties ${KAFKA_HOME}/config/connector.properties