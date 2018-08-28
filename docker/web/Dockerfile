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

RUN yum -y update && \
    yum -y install epel-release && \
    yum -y install git make autoconf curl wget && \
    yum -y install gcc-c++ glibc-headers openssl-devel readline libyaml-devel readline-devel zlib zlib-devel sqlite-devel bzip2 && \
    yum clean all

# nginxをインストール
RUN echo '[nginx]' > /etc/yum.repos.d/nginx.repo \
&&  echo 'name=nginx repo' >> /etc/yum.repos.d/nginx.repo \
&&  echo 'baseurl=http://nginx.org/packages/mainline/centos/7/$basearch/' >> /etc/yum.repos.d/nginx.repo \
&&  echo 'gpgcheck=0' >> /etc/yum.repos.d/nginx.repo \
&&  echo 'enabled=1' >> /etc/yum.repos.d/nginx.repo

ADD docker/web/conf/nginx/default.conf /tmp/default.conf
ADD docker/web/scripts/start.sh /tmp/start.sh

RUN yum install nginx -y

RUN ln -s /work_vue/pub /usr/share/nginx/html/.
RUN ln -s /work_vue/nodes /usr/share/nginx/html/.

# nodejs project & nginxを起動
EXPOSE 80

CMD ["bash", "/tmp/start.sh"]
