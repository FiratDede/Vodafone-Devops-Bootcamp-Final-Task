FROM node:16.17.0 as base
 
WORKDIR /nodejs-server
 
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
 
COPY . .

RUN npm run test

CMD [ "node", "app.js" ]