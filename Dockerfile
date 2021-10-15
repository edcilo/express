FROM node:16-alpine

ENV DEBUG=app:*

WORKDIR /usr/src/app

#RUN npm install express-generator -g
RUN npm install nodemon -g

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
#CMD tail -f /dev/null
