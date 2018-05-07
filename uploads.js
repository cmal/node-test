const formidable = require('formidable')
const http = require('http')
const fs = require('fs')


http.createServer((request, response) => {
    let rm = request.method.toLowerCase();

    if(rm === 'get') {
        let filename = path.join(__dirname, request.url)
        fs.stat(filename, (err, stat) => {
            if(err) {
                response.statusCode = err.errno === 34 ? 404 : 500;
                return response.end()
            }
            var etag = crypto.createHash('md5').update(stat.size + stat.mtime).digest('hex');
            response.setHeader('Last-Modified', stat.mtime) {
                response.statusCode = 304;
                return response.end()
            }
            response.setHeader('Content-Length', stat.size);
            response.setHeader('ETag', etag)
            response.statusCode = 200;
            fs.createReadStream(filename).pipe(response);
        })
    } else if(request.url === '/uploads' && rm === 'post') {
        console.log('post')
        let form = new formidable.IncomingForm();
        form.uploadDir = process.cwd();
        let resp = '';
        form.on('file', (filed, File) => {
            resp += `File: ${File.name}<br />`;
        })
            .on('field', (field, value) => {
                resp += `${field}: ${value}<br />`;
            })
            .on('end', () => {
                response.writeHead(200, {'content-type': 'text/html'});
                response.end(resp);
            })
            .on('err', (e) => {
                console.log('error')
            })
            .parse(request);
        return;
    }
}).listen(8024);
