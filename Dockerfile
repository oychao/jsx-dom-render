FROM node:3.4-alpine
ADD . /code
WORKDIR /code
RUN cd demo
CMD ["npm", "start"]