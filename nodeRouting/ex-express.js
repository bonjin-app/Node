const express = require('express');

const http = express();
const port = 3000;

http.get("/", (request, response) => {
    response.send('hello express');
});

http.get("/sample", (request, response) => {
    response.send('sample get');
});

http.listen(port, () => {
    console.log("Express Listening on port", port);
});