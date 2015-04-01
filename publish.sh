#!bin/sh

#clear dist
if [ -d "./dist" ]
then
  rm -R ./dist
  echo "clear success!"
else
  echo "dist is not exit!"
fi

#spm build
spm build
echo "spm build success!"

#project deploy
cp -R dist/src/ dist/
rm -R dist/src
echo "project deploy success!"

echo "publish success!"

#less
cp src/less/variables/config-deploy.less src/less/variables/config.less

echo "less config change to deploy success!"

#gulp
gulp

echo "gulp success!"

#transport
node transport.js

echo "transport success!"

#revert
cp src/less/variables/config-debug.less src/less/variables/config.less

echo "less config revert success!"
