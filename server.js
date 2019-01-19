const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from David, student ID = 300844568, whom wants to buy a Switch, but realizes he would fail all his classes if he did.\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

