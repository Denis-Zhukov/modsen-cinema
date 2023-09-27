FROM node:18

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn && \
    apt-get clean \
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install bcrypt
RUN yarn install --ignore-engines
COPY . .
EXPOSE 8000
CMD ["yarn", "start"]
