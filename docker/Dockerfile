FROM node:8.16.1-alpine
WORKDIR /app
ARG GITHUB_SHA
ENV GITHUB_SHA=$GITHUB_SHA
COPY package*.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8080
