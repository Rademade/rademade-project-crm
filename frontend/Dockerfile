FROM node:7.6
RUN mkdir /app
WORKDIR /app
RUN npm install -g yarn
RUN npm install -g webpack
RUN npm install -g webpack-dev-server
RUN npm link webpack

ADD package.json /app
ADD yarn.lock /app
RUN yarn
ADD . /app