FROM airhacks/wildfly
LABEL maintainer="Adam Bien, adam-bien.com" description="Sample for WildFly with HA session clustering"
ENTRYPOINT ${WILDFLY_HOME}/bin/standalone.sh -b=0.0.0.0 -bmanagement=0.0.0.0 -bprivate=`hostname -I` -c standalone-ha.xml
EXPOSE 8080 55200/udp 45700/udp 45688/udp
COPY session-replication.war ${DEPLOYMENT_DIR}