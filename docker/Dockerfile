FROM node:8.16.1-alpine
WORKDIR /app
ARG GIT_COMMIT
ENV GIT_COMMIT=$GIT_COMMIT
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8080
