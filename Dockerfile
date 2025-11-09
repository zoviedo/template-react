# ==============================
# Etapa 1: Construcción de la app
# ==============================

FROM node:18-alpine AS build

WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Asegurarse de instalar TODAS las dependencias, incluyendo las de desarrollo
RUN npm install --include=dev

# Copiar el resto del código fuente
COPY . .

# Construir la versión optimizada de la aplicación
RUN npm run build

# ==============================
# Etapa 2: Servidor Nginx
# ==============================
FROM nginx:alpine

# Copiar los archivos estáticos generados en la etapa de build
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
