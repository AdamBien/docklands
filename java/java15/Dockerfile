FROM centos:8
LABEL maintainer="Adam Bien, adam-bien.com" description="Base image with JDK 14 for all docklands images"
RUN yum update -y \
  && yum -y install unzip \
  && curl -O https://download.java.net/java/GA/jdk15.0.2/0d1cfde4252546c6931946de8db48ee2/7/GPL/openjdk-15.0.2_linux-x64_bin.tar.gz \
  && mkdir -p /usr/lib/jvm/ \
  && tar -xvf openjdk-15.0.2_linux-x64_bin.tar.gz -C /usr/lib/jvm/ \
  && rm openjdk-15.0.2_linux-x64_bin.tar.gz \
  && yum -y install glibc-locale-source \
  && localedef -i en_US -f UTF-8 en_US.UTF-8 \
  && yum clean all
ENV JAVA_TOOLS_OPTIONS=--enable-preview
ENV LC_ALL=en_US.UTF-8
ENV JAVA_HOME /usr/lib/jvm/jdk-15.0.2
ENV PATH "$PATH":.:"$JAVA_HOME/bin":