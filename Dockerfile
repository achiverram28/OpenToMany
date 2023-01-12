FROM node:18.13.0 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build 

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
