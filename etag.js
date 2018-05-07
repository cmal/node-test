// headers:

// If-None-Match, Last-Modified, If-Unmodified-Since

const crypto = require('crypto');

let etag = crypto.createHash('md5').update(stat.size + stat.mtime).digest('hex');

if(request.headers['if-none-match'] === etag) {
    response.statusCode = 304;
    return response.end();
} else {
    // stream the requested resource
}
