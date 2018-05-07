// sigint.js

console.log("Running ...");

setInterval(() => {}, 1e6); // keep node running the process

process.on('SIGINT', () => {
    console.log('we received the SIGINT signal！')
    process.exit(127); // # after exit, echo $? to show 127
})

