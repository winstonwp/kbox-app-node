FROM node:4

RUN npm update -g npm && npm install -g pm2

#WORKDIR /home/aps

COPY ./process.json .

RUN git clone https://github.com/winstonwp/helloworld-express.git \
  && cd helloworld-express \
  && npm install

CMD node helloworld-express/index.js
