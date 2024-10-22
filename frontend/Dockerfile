FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_PORT=5173

EXPOSE 3000

CMD ["npm", "start", "--", "--host"]
