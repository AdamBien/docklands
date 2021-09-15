FROM centos:8
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image with JDK 11 for all docklands images"
RUN yum update -y \
  && yum -y install unzip \
  && yum -y install java-11-openjdk-devel \
  && yum -y install glibc-locale-source \
  && localedef -i en_US -f UTF-8 en_US.UTF-8 \
  && yum clean all

ENV LC_ALL=en_US.UTF-8
ENV JAVA_HOME /usr/lib/jvm/java-11
ENV PATH "$PATH":.w