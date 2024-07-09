//Use below concepts in one example
//Require
//Module exports
//Require with nodejs ap (nodejs.org/api) 
//Create own script
//process.argv

//Use of require
const http = require('http');
const hostname = '127.0.0.1';
const port = 4002;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, World!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

//Use of process.argv
const myName = process.argv[2];
console.log("My name is " + myName);