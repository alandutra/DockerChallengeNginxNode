FROM nginx:latest

# removendo as configurações default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# copia o arquivo de configuração para o destino 
COPY nginx.conf /etc/nginx/conf.d

# criando um arquivo php em branco na pasta public para não tomar erro 404
RUN mkdir /var/www/app -p && \
    touch /var/www/app/index.js
