TMPCACHE=/tmp/temporary-cache
cd /work_vue/nodes/${1}
rm -rf node_modules
npm install --cache ${TMPCACHE}
npm run serve
