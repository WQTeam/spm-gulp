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


