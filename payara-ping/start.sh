#!/bin/bash
echo '------- Starting ${PAYARA_ARCHIVE}  -------'
/opt/payara41/bin/asadmin start-domain ${DOMAIN_NAME}
/opt/payara41/bin/asadmin deploy --force=true ping.war
tail -f /opt/payara41/glassfish/domains/${DOMAIN_NAME}/logs/server.log
