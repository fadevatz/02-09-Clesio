# Imagem base ultra-leve com Nginx Alpine
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copia nossa configuração de produção
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos da aplicação
COPY . /usr/share/nginx/html

# Permissões adequadas de leitura
RUN chmod -R 755 /usr/share/nginx/html

# Porta padrão HTTP
EXPOSE 80

# Inicialização
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]

