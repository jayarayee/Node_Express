const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
});

const Server = http.createServer(app);


Server.listen(port, hostname, () =>{
    console.log(`Server Running at http://${hostname}:${port}`)
});