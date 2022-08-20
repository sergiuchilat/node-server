const http = require('http');
var url = require('url');
require('dotenv').config();
const router = require('./router');

const server = http.createServer((request, response) => {
  const routeContent = router.route({
    method: request.method, url: url.parse(request.url), headers: request.headers
  });
  response.setHeader('Content-Type', routeContent.contentType);
  response.statusCode = routeContent.code;
  response.end(routeContent.body);
})

server.listen(process.env.APP_SERVER_PORT, process.env.APP_SERVER_URL, () => {
  console.log("Node server running");
})

