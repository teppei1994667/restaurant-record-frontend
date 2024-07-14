FROM node:22.1-alpine

WORKDIR /app/

# プロジェクト作成次はコメントアウト
COPY ./project/package.json ./
RUN npm install