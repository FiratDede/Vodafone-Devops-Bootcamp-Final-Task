FROM node:lts
 
WORKDIR /nodejs-server
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .

CMD [ "node", "app.js" ]