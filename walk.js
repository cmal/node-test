const fs = require('fs');
const path = require('path');

let walk = (dir, done) => {
    let results = {};
    fs.readdir(dir, (err, list) => {
        let pending = list.length;
        if (err || !pending) {
            return done(err, results);
        }
        list.forEach(file => {
            let dfile = require('path').join(dir, file);
            fs.stat(dfile, (err, stat) => {
                if (stat.isDirectory()) {
                    return walk(dfile, (err, res) => {
                        results[file] = res;
                        !--pending && done(null, results);
                    });
                }
                results[file] = stat;
                !--pending && done(null, results)
            })
        })
    })
}

// walk('.', (err, res) => {
//     console.log(require('util').inspect(res, {depth: null}));
// })


let asyncwalk = (dir, done, emitter) => {
    let results = {};
    emitter = emitter || new (require('events').EventEmitter);
    fs.readdir(dir, (err, list) => {
        let pending = list.length;
        if (err || !pending)  {
            return done(err, results);
        }
        list.forEach(file => {
            let dfile = require('path').join(dir, file);
            fs.stat(dfile, (err, stat) => {
                if (stat.isDirectory()) {
                    emitter.emit('directory', dfile, stat);
                    return asyncwalk(dfile, (err, res) => {
                        results[file] = res;
                        !--pending && done(null, results);
                    }, emitter);
                }
                emitter.emit('file', dfile, stat);
                results[file] = stat;
                !--pending && done(null, results);
            })
        })
    })
    return emitter;
}

asyncwalk('.', (err, res) => {

}).on('directory', (path, stat) => {
    console.log(`Directory: ${path} - ${stat.size}`);

}).on('file', (path, stat) => {
    console.log(`File: ${path} - ${stat.size}`);
});
