#  Dockerfile for Node Express Backend

FROM node:alpine

# Create App Directory
WORKDIR /server

# Install Dependencies
COPY package*.json /server

RUN npm install 

# Copy app source code
COPY . /server

# Exports
EXPOSE 3080

CMD ["node","index.js"]