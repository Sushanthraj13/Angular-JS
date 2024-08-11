const http = require('http');
const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-type': 'text/plain'});
    res.write('Hello Sushanth Raj');
    res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running on port${PORT}`);
});