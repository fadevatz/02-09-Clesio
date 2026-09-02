# Usar Nginx Alpine como imagem base leve e performática
FROM nginx:alpine

# Remover a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar os arquivos estáticos da aplicação para o diretório web do Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Copiar arquivo de configuração customizado do Nginx se necessário
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 do container
EXPOSE 80

# Comando para rodar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
