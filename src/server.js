const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end();
});

server.listen(PORT, () => {});
