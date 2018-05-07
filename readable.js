const stream = require('stream')

const fs = require('fs')


// console.log('Copying ...');

// fs.createReadStream('source.bin')
//     .pipe(fs.createWriteStream('dest.bin'))
//     .on('close', () => {console.log('done')});

let readable = new stream.Readable({
    // encoding: 'utf8',
    // highWaterMark: 16000,
    // objectMode: true // this is important, to treat input data as object other than stream of bytes
})

// let Feed = function(channel) {
//     let readable = new stream.Readable({});
//     let news = [
//         'Big Win!',
//         'Stocks Down!',
//         'Actor Sad!'
//     ]
//     readable._read = () => {
//         if (news.length) {
//             return readable.push(news.shift() + '\n')
//         }
//         readable.push(null)
//     }
//     return readable;
// }

// let Feed = function(channel) {
//     let prices = [{price: 1}, {price: 2}];
//     readable._read = () => {
//         if(prices.length) {
//             return readable.push(prices.shift())
//         }
//         readable.push(null)
//     }
//     return readable
// }

let Feed = function(channel) {
    let readable = new stream.Readable({})
    let news = 'A long headline might go here';
    readable._read = () => {
        readable.push(news)
        readable.push(null)
    }
    return readable
}


let feed = new Feed()

// feed.on('readable', () => {
//     let data = feed.read()
//     // data && process.stdout.write(data)
//     data && console.log(data)
// })

feed.on('readable', () => {
    let character;
    while(character = feed.read(1)) {
        process.stdout.write(character.toString())
    }
        process.stdout.write('\n')
})

feed.on('end', () => console.log('No more news'))

