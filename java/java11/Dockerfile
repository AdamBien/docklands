FROM centos:8
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image with JDK 11 for all docklands images"
RUN yum update -y \
  && yum -y install unzip \
  && yum -y install java-11-openjdk-devel \
  && yum clean all
ENV JAVA_HOME /usr/lib/jvm/java-11