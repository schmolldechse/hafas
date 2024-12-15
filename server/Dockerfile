FROM node:latest

# set the workdir
WORKDIR /usr/src/hafas-rest

COPY . .
RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 3000
