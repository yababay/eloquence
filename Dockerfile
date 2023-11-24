FROM node:20-alpine3.17

RUN mkdir /data
RUN touch /data/README.md

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY build/ ./

CMD [ "node", "." ]
