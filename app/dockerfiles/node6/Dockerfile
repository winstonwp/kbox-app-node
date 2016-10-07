FROM node:6

VOLUME /var/www/html

RUN npm install -g --quiet pm2

COPY ./entrypoint.sh /
COPY ./simple_app/app.js /app.js
COPY ./simple_app/process.json /process.json

WORKDIR /var/www/html/

ENTRYPOINT ["/entrypoint.sh"]
