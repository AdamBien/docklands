FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION=11.0.1
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \    
  && yum -y install unzip \    
  && curl -O https://download.java.net/java/GA/jdk11/13/GPL/openjdk-${VERSION}_linux-x64_bin.tar.gz \
  && tar xvf openjdk-${VERSION}_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm openjdk-${VERSION}_linux-x64_bin.tar.gz \  
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-${VERSION}
ENV PATH "$PATH":/${JAVA_HOME}/bin:.: