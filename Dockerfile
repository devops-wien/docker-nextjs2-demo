FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM node:18
WORKDIR /usr/src/app

COPY . .
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
