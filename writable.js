const stream = require('stream')

// let writable = new stream.Writable({
//     highWaterMark: 16000,
//     decodeStrings: false
// })

// writable._write = (chunk, encoding, callback) => {
//     console.log(chunk.toString())
//     callback();
// }

// let written = writable.write(Buffer.alloc(32, 'A'))

// writable.end()

// console.log(written)


let writable = new stream.Writable({
    highWaterMark: 10
})


writable._write = (chunk, encoding, callback) => {
    process.stdout.write(chunk)
    // console.log(chunk)
    callback()
}

// function writeData(iterations, writer, data, encoding, cb) {
//     (function write() {
//         if(!iterations--) {
//             return cb()
//         }

//         if(!writer.write(data, encoding)) {
//             console.log(` <wait> highWaterMark of ${writable._writableState.highWaterMark} reached`)
//             writer.once('drain', write)
//         }
//     })()
// }


// writeData(4, writable, 'String long', 'utf8', () => console.log('finished.'))


// Write the data to the supplied writable stream one million times.
// Be attentive to back-pressure.
function writeData(writer, data, encoding, callback) {
  let i = 4;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
          console.log('ok', ok)
      }
    } while (i > 0 && ok);
    // if (i > 0) {
    //   // had to stop early!
    //   // write some more once it drains
    //   writer.once('drain', write);
    // }
  }
}

writeData(writable, 'String safsdfsdaf very long', 'utf8', () => console.log('\nfinished.'))
