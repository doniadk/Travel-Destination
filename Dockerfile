FROM node:20-alpine

# creating a dir in docker container
WORKDIR /app

# copying local files into app dir
COPY server.js .              
COPY package.json .           
COPY src ./src
COPY public ./public

# when running docker, it runs this command to install dependencies
RUN npm install

EXPOSE 3000

# execute node command to start the server
CMD [ "node", "server.js" ]