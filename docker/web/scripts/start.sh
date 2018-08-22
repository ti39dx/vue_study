#! /bin/bash
cp -rf /work_vue/nodeproj2/dist/* /usr/share/nginx/html
cp /tmp/default.conf /etc/nginx/conf.d/default.conf
/usr/sbin/nginx -g "daemon off;"