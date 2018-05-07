const events = require('events')

function getEmitter() {
    let emitter = new events.EventEmitter()
    // emitter.emit('start') # this will not trigger an event

    process.nextTick(() => {
        emitter.emit('start')
    })
    return emitter
}

let myEmitter = getEmitter()

myEmitter.on('start', () => {
    console.log('started');
})






