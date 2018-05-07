let count = 1;
function loop() {
    console.log(count++)
    process.nextTick(loop)
}
loop()
