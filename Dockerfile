# ============================
# 🧱 Fase 1: Build (React CRA)
# ============================
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ============================
# 🚀 Fase 2: Servidor Nginx
# ============================
FROM nginx:stable-alpine

# LIMPIAR TODO EL HTML (no solo los archivos)
RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
