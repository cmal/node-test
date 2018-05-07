const fs = require('fs')

let writer = fs.createWriteStream('novel.txt', {flags: 'w', encoding: 'utf8'})

process.stdin.pipe(writer)
