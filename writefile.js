const fs = require('fs')

fs.writeFile('test.txt', 'A string or Buffer of data', (err) => {
    if (err) throw err;
    console.log('Data has been written');
});
