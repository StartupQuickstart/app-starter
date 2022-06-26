FROM nikolaik/python-nodejs:python3.8-nodejs14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /usr/src/app/

RUN npm install
RUN npm install --prefix src/client
RUN npm rebuild node-sass --prefix src/client

# Bundle app source
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]