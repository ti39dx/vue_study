TMPCACHE=/tmp/temporary-cache
cd /work_vue/nodeproj2
rm -rf node_modules
npm install --cache ${TMPCACHE}
npm run serve
