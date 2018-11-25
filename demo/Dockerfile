FROM node
RUN mkdir -p /code
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
