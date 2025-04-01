FROM node:14

WORKDIR /app

# Copy package và cài đặt dependencies
COPY package.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
