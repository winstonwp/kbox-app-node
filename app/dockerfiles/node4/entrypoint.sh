#!/bin/bash
set -e

DIR="/var/www/html"
if ! [ "$(ls -A $DIR)" ]; then
  cd $DIR
  git clone https://github.com/winstonwp/helloworld-express.git ./
else
  echo "$DIR had project..."
fi
if ! [ "$(ls -A $DIR/node_modules)" ]; then
  cd $DIR
  npm install
else
  echo "$DIR/node_modules is not empty"
fi

chown -Rf 1000:1000 $DIR

node "$DIR/index.js"

exec "$@"
