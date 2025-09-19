# Etapa 1: build
FROM node:20.15.1-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependências para otimizar cache
COPY package*.json ./
COPY prisma ./prisma

RUN npm install

# Copia o restante do projeto
COPY . .

# Build do Next.js
RUN npm run build

# Etapa 2: produção
FROM node:20.15.1-alpine AS runner

WORKDIR /app

# Copia dependências e build da etapa anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.env .env

# Expõe a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
