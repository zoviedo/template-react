# Etapa 1: construir la app
FROM node:18-alpine AS build
# Sugerencia: puede cambiar '18' por otra versión de Node (20, 22)
# siempre y cuando esté soportada por React.

WORKDIR /app

# Copiar archivos base del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Crear la versión optimizada para producción
RUN npm run build

# Etapa 2: servidor para archivos estáticos
FROM nginx:alpine
# No modificar: Nginx se usa como servidor ligero para servir el build.

# Copiar la carpeta 'build' generada hacia la ruta pública de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80 (la plataforma lo usará para enrutar)
EXPOSE 80

# Comando de inicio del contenedor
CMD ["nginx", "-g", "daemon off;"]
