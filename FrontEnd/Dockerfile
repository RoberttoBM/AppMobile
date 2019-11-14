FROM 73828877/nestjs-oracle-11g:v1

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

run npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npm","run", "start:prod"]
