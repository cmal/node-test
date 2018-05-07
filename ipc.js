// ipc.js
setInterval(() => {}, 1e6);
process.on("SIGUSR1", () => {
    console.log('GOT a signal!');
})
// node ipc.js &
// using `kill -USR1 $!` to send signal
// or use kill -l to show available signals
