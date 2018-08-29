FROM centos:centos7

ENV LANG=ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

RUN cp -p /usr/share/zoneinfo/Japan /etc/localtime \
&&  echo 'ZONE="Asia/Tokyo"' > /etc/sysconfig/clock

RUN yum install -y \
    epel-release \
    openssl-devel \
    readline-devel\
    zlib-devel \
    less \
    wget \
    curl \
    git \
    dtach \
    vim \
    hash-slinger \
    bzip2 \
    tar \
    sqlite-devel \
    gcc-c++ \
    make \
    sox \
&&  yum groupinstall "Development Tools" -y \
&&  yum clean all

RUN curl --silent --location https://rpm.nodesource.com/setup_10.x | bash - \
    && yum -y install nodejs \
    && npm -g up \
    && npm install -g forever \
    && npm install -g hotnode \
    && npm install -g @vue/cli

RUN yum -y update && \
    yum -y install epel-release && \
    yum -y install git make autoconf curl wget && \
    yum -y install gcc-c++ glibc-headers openssl-devel readline libyaml-devel readline-devel zlib zlib-devel sqlite-devel bzip2 && \
    yum clean all

ADD docker/node/scripts/start.sh /tmp/start.sh
ADD docker/node/scripts/run_node.sh /tmp/run_node.sh
ADD docker/node/scripts/run_nodeproj2.sh /tmp/run_nodeproj2.sh

EXPOSE 3000

CMD ["bash", "/tmp/start.sh"]
