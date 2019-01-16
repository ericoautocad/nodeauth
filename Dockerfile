FROM node:9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install nodemon -g

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
