# Imagem base com Node.js
FROM node:20-alpine

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Define diretório de trabalho
WORKDIR /src

# Copia arquivos de dependência
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install

# Copia o restante da aplicação
COPY . .

# Builda o projeto
RUN pnpm build

# Remove dependências de dev
RUN pnpm prune --prod

# Expõe a porta da aplicação
EXPOSE 3333

# Comando para iniciar o app
CMD ["node", "dist/server.mjs"]