FROM node:latest

# set the workdir
WORKDIR /usr/src/hafas-rest

COPY server/package*.json ./
RUN npm install

COPY server/ .

CMD [ "npm", "run", "dev" ]

EXPOSE 3000
