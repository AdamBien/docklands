#!/bin/sh
echo 'Starting Payara'
echo deploy ${DEPLOYMENT_DIR}/`cd ${DEPLOYMENT_DIR} && ls -1 | head -1` > ${INSTALL_DIR}/deploy-command
cat ${INSTALL_DIR}/deploy-command
asadmin start-domain --verbose --postbootcommandfile ${INSTALL_DIR}/deploy-command ${DOMAIN_NAME}
