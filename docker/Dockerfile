FROM node:8.16.1-alpine
WORKDIR /app
ARG GITHASH
ENV GITHASH=$GITHASH
ARG DATE 
ENV DATE = $DATE
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 3000
