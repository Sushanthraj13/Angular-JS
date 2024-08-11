const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const PORT = 1801;

const mimeType={
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    
};

http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url);

    if(parsedUrl.pathname==="/"){
        var filesLink ="<ul>";
        res.setHeader('Content-type', 'text/html');
        var fileList = fs.readdirSync("./");
        fileList.forEach(element => {
            if(fs.statSync("./"+element).isFile()){
                filesLink+=`<br/><li><a href='./${element}'>
                    ${element}
                </a></li>`;
            }
        });
        filesLink+="</ul>";
        res.end("<h1> List of files:<h1>" + filesLink);
    }
    const sanitizePath = 
    path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
    let pathname = path.join(__dirname,sanitizePath);

    if(!fs.existsSync(pathname)){
        res.statusCode = 404;
        res.end(`File ${pathname} not found!`);
    }
    else{
        fs.readFileSync(pathname, function(err, data){
            if(err){
                res.statusCode = 500;
                res.end(`Error in getting the file.`);
            }
            else{
                const ext = path.parse(pathname).ext;
                    res.setHeader('Content-type',mimeType[ext] || 'text/plain');
            }
        });
    }
}).listen(PORT);

console.log(`Server listening on port ${PORT}`);
