const http = require('http')

// http.request({
//     host: 'www.example.org',
//     method: 'GET',
//     path: '/'
// }, function(response) {
//     response.setEncoding('utf8')
//     response.on('readable', () => console.log(response.read()))
// }).end()


// http.get('http://www.example.org/', response => {
//     console.log(`Status: ${response.statusCode}`)
// }).on('error', err => {
//     console.log('Error: ' + err.message)
// })


const server = new http.Server();

server.on('request', (request, socket) => {
    console.log(request.url)

    http.request({
        host: 'www.example.org',
        method: 'GET',
        path: '/',
        port: 80
    }, response => response.pipe(socket))
        .end();
})

server.listen(8085, () => console.log('Proxy server listening on localhost: 8085'))
