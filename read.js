const fs = require('fs')

fs.open('readable.js', 'r', (err, fd) => {
    fs.fstat(fd, (err, stats) => {
        let totalBytes = stats.size;
        let buffer = Buffer.alloc(totalBytes);
        let bytesRead = 0;
        // Each call to read should ensure that chunk size is
        // within proper size ranges (not too small; not too large).

        let read = chunkSize => {
            fs.read(fd, buffer, bytesRead, chunkSize, bytesRead, (err, numBytes, bufRef) => {
                if ((bytesRead += numBytes) < totalBytes) {
                    return read(Math.min(512, totalBytes - bytesRead));
                }
                fs.close(fd, () => {
                    console.log(`File read complete. Total bytes read: ${totalBytes}`);
                });
                // Note that the callback recieves a reference to the
                // accumulating buffer
                console.log(bufRef.toString());
            })
        }
        read(Math.min(512, totalBytes));
    })
})
