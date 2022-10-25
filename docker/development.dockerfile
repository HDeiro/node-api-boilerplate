FROM node:18-alpine
WORKDIR /usr/src
COPY package.json ./
RUN npm i --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
