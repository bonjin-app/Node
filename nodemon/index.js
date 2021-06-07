const http = require('http');

http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello Nodejs hihi');
    response.end();
}).listen(3000);