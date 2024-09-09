FROM node:16-buster

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
