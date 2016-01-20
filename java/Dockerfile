FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
RUN yum update -y
RUN yum clean all
RUN yum -y install wget
RUN yum -y install unzip
RUN yum -y install tar
RUN yum -y install gettext
RUN yum -y install openssh-server
RUN yum -y install openssh-clients
RUN mkdir /var/run/sshd
RUN /usr/bin/ssh-keygen -A
RUN yum -y install java-1.8.0-openjdk-devel
ENV PATH "$PATH":/${JAVA_HOME}/bin:.: