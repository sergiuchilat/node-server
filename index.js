const http = require('http');
var url = require('url');
const router = require('./router');

const hostname = "127.0.0.1";
const port = 3030;

const server = http.createServer((request, response) => {
  const routeContent = router.route({
    method: request.method, url: url.parse(request.url), headers: request.headers
  });
  response.setHeader('Content-Type', routeContent.contentType);
  response.statusCode = routeContent.code;
  response.end(routeContent.body);
})

server.listen(port, hostname, () => {
  console.log("Node server running");
})

