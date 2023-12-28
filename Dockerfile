FROM node:18.17.1-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn dev 
EXPOSE 3000
