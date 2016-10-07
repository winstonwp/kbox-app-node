#!/bin/bash
set -e

DIR="/var/www/html"
if ! [ "$(ls -A $DIR)" ]; then
  cd $DIR
  cp /{app.js,process.json} ./
fi

chown -Rf 1000:1000 $DIR

pm2-docker "$DIR/process.json"

exec "$@"
