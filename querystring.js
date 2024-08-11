const http = require ('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.end(JSON.stringify(query));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});