#! /bin/bash

# get versions
. ../../../versions

if [[ $vUbuntu = "" ]];then
  echo "ubuntu version required, fill in adaptivetrader/deploy/version"
  exit 1
fi

if [[ $vCrossbar = "" ]];then
  echo "crossbar version required, fill in adaptivetrader/deploy/version"
  exit 1
fi


# generate container folder
mkdir -p ./build
sed "s/__VUBUNTU__/$vUbuntu/g" ./template.Dockerfile > ./build/Dockerfile
cp ./template.install.sh ./build/install.sh

# build
docker build --no-cache                \
  -t weareadaptive/crossbar:$vCrossbar \
  ./build/.
