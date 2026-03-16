FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci \
    && npm install -g firebase-tools

COPY . .

EXPOSE 5192

CMD ["npm", "run", "dev"]
