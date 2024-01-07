FROM node:18.17.1-alpine as build
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
CMD [ "yarn", "dev" ]
