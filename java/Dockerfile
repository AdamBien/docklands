FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
RUN yum update -y && \
    yum clean all && \
    yum -y install wget && \
    yum -y install unzip && \
    yum -y install tar && \
    yum -y install gettext && \
    yum -y install openssh-server && \
    yum -y install openssh-clients && \
    mkdir /var/run/sshd && \
    /usr/bin/ssh-keygen -A && \
    yum -y install java-1.8.0-openjdk-devel
ENV PATH "$PATH":/${JAVA_HOME}/bin:.:
