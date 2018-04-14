FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \    
  && yum -y install unzip \    
  && curl -O https://download.java.net/java/GA/jdk10/10/binaries/openjdk-10_linux-x64_bin.tar.gz \
  && tar xvf openjdk-10_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-10_linux-x64_bin.tar.gz \  
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-10
ENV PATH "$PATH":/${JAVA_HOME}/bin:.: