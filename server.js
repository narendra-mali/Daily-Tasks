const http = require('http');
const server = http.createServer();
const app = require('./app')

server.listen(3000,console.log("app running")) 