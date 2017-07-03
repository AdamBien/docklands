#!/bin/sh
echo 'Starting Payara with DerbyDB'
echo deploy ${DEPLOYMENT_DIR}/`cd ${DEPLOYMENT_DIR} && ls -1 | head -1` > deploy-command
cat deploy-command
asadmin start-database && asadmin start-domain --verbose --postbootcommandfile deploy-command ${DOMAIN_NAME}