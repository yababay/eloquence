FROM node:20-alpine3.17

RUN mkdir /data
COPY .db/quotations.txt /data
COPY .db/LAST_LINE /data

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY build/ ./

CMD [ "node", "." ]
