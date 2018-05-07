let cnt = 0
setInterval(() => {
    process.stdout.write(" -> " + cnt++);
}, 100);

var fork = require('child_process').fork;
fork('./fork.js')
fork('./fork.js')
fork('./fork.js')
