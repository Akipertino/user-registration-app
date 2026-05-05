FROM node:alpine
WORKDIR /app

# copier les fichiers package
COPY package*.json ./

# Installer les dépendances en mode production
RUN npm ci --only=production

# Copie du code source
COPY src ./src/

EXPOSE 5000

CMD [ "node", "src/server.js" ]