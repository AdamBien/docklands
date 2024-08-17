FROM amazonlinux:latest
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image with JDK 21 for all docklands images"
RUN yum update -y \
  && yum -y install gzip tar \
  && curl -LO https://corretto.aws/downloads/latest/amazon-corretto-21-x64-linux-jdk.tar.gz \
  && mkdir -p /usr/lib/jvm/ \
  && tar -xzvf amazon-corretto-21-x64-linux-jdk.tar.gz -C /usr/lib/jvm/ \
  && rm amazon-corretto-21-x64-linux-jdk.tar.gz \
  && yum -y install glibc-locale-source \
  && localedef -i en_US -f UTF-8 en_US.UTF-8 \
  && yum clean all
ENV JAVA_TOOLS_OPTIONS=--enable-preview
ENV LC_ALL=en_US.UTF-8
ENV JAVA_HOME /usr/lib/jvm/jdk-21
ENV PATH "$PATH":.:"$JAVA_HOME/bin":