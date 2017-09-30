FROM node
COPY . /app

WORKDIR /app
EXPOSE 3000
RUN npm install && npm install -g pm2
CMD npm start
