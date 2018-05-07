const spawn = require('child_process').spawn;

let ls = spawn('ls', ['-lh', '.'], {
    env: {
        detached: true
    }
});
ls.unref()
ls.stdout.on('readable', function() {
    let d = this.read()
    d && console.log(d.toString())
})

ls.on('close', code => {
    console.log(`child process exited with code: ${code}`)
})
