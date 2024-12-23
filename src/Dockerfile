FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY . .
RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 15000 15100
