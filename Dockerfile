FROM node:11.4.0-alpine

WORKDIR /Users/taufiq/JS/lajur1-pos5
COPY package.json /Users/taufiq/JS/lajur1-pos5
RUN npm install

COPY . .

EXPOSE 9999

CMD [ "node", "app.js" ]