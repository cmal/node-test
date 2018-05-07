const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((request, response) => {
    let parsedURL = url.parse(request.url, true)
    let pathname = parsedURL.pathname
    let args = pathname.split('/')
    let method = args[1];
    if(method == 'login') {
        response.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
        response.write(':' + Array(2049).join(' ') + '\n');
        response.write('retry: 2000\n');
        response.on('close', () => {
            console.log('client disconnected');
        })
        setInterval(() => {
            response.write('data:  ' + new Date() + '\n\n');
            console.log(process.memoryUsage())
        }, 1000);
        return
    } else {
        fs.readFile('./eventsource.html', (err, data) => {
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    }
}).listen(8080)
