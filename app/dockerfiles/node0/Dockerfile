FROM node:0
RUN npm update -g npm && npm install -g pm2
RUN apt-get update
RUN apt-get install git
RUN git clone https://github.com/winstonwp/helloworld-express.git
RUN cd helloworld-express/ && npm install

CMD node helloworld-express/index.js
