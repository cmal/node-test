var fs = require('fs');
var path = require('path');

(dir => {
    fs.readdir(dir, (err, list) => {
        list.forEach(file => {
            fs.stat(path.join(dir, file), (err, stat) => {
                if (stat.isDirectory()) {
                    return console.log('Found directory: ', file);
                }
                console.log('Found file: ', file);
            })
        })
    })
})('.');
