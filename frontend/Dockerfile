FROM node:14

WORKDIR /app

# Cài đặt dependencies
COPY package.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
