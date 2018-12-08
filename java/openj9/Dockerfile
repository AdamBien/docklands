FROM centos:7
MAINTAINER Adam Bien, adam-bien.com
ENV VERSION=11+28
RUN yum update -y \
  && mkdir /usr/lib/jvm/ \    
  && yum -y install unzip \    
  && curl -L -O https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11%2B28/OpenJDK11-jdk_x64_linux_openj9_11_28.tar.gz \
  && tar xvf OpenJDK11-jdk_x64_linux_openj9_11_28.tar.gz -C /usr/lib/jvm/ \
  && yum clean all \
  && rm OpenJDK11-jdk_x64_linux_openj9_11_28.tar.gz \  
  && rm -rf /var/cache/yum
ENV JAVA_HOME /usr/lib/jvm/jdk-${VERSION}
ENV PATH "$PATH":/${JAVA_HOME}/bin:.: