FROM node:16.17.0 as base
 
WORKDIR /nodejs-server
 
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
 
COPY . .

FROM base as prod

CMD [ "node", "app.js" ]

FROM base as test

RUN npm run test