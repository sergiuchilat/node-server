const http = require('http');
const hostname = "127.0.0.1";
const port = 3030;

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Some text');
})

server.listen(port, hostname, () => {
  console.log("Node server running");
})

