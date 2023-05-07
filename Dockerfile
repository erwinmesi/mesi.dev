FROM node:18-alpine3.17

WORKDIR /usr/app

RUN apk add nginx
RUN mkdir -p /run/nginx
RUN mkdir -p /usr/share/nginx/html
RUN nginx

COPY nginx.config /etc/nginx/http.d/default.conf
RUN nginx -t

COPY index.html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]