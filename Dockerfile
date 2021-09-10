FROM wmweeks/sapi4-docker:1.3

RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]