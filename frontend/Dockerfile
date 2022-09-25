# Dockerfile for React client

# Build react client
FROM node:alpine

# Working directory
WORKDIR /client

COPY package*.json /client

###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . /client

EXPOSE 3000

CMD ["npm","start"]