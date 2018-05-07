const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log(request.constructor.name)
    console.log(response.constructor.name)
    if(request.method !== 'GET') {
        return response.end('Simple File Server only does GET');
    }
    var dir = __dirname + request.url;
    console.log(dir)
    fs
        .createReadStream(dir)
        .pipe(response);

}).listen(8023);
