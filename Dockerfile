FROM node:16-alpine as build
WORKDIR /app
COPY . .
RUN npm install -g ionic capacitor
RUN npm install
RUN npm run build --prod

# WORKDIR /app
# COPY package*.json /app/
# RUN npm install -g ionic capacitor
# RUN npm install
# COPY ./ /app/
# RUN npm run build --prod
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/
EXPOSE 80
