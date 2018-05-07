const fs = require('fs');

// const options = { encoding: 'utf8' };
// //const options = 'utf8';

// fs.readFile('/etc/passwd', options, (err, fileData) => {
//     if (err) throw err;
//     console.log(fileData);
// })


const readline = require('readline');

// let rl = readline.createInterface({
//     input: fs.createReadStream('readable.js'),
//     terminal: false
// });

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [];

rl.on('line', ln => {
    // arr.push(ln.trim());
    console.log(`Received: ${ln}`)
})

// line, pause, resume, close

