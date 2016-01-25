#!/bin/bash
echo '------- Starting wildfly  -------'
${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0
