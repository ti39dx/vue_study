#! /bin/bash
#cd /work_vue/nodeproj
#npm install express --save
#hotnode index.js
TMPCACHE=/tmp/temporary-cache
if [ ! -e ${TMPCACHE} ]; then
  mkdir ${TMPCACHE}
fi
cd /work_vue/nodeproj2
rm -rf node_modules
npm install --cache ${TMPCACHE}
npm run serve