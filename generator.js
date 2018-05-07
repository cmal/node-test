function getArraySomehow() {
    // slice into a copy; don't send original
    return ['one', 'two', 'buckle', 'my', 'shoe'].slice(0)
}

let state = getArraySomehow()

for (let x = 0; x < state.length; x ++) {
    console.log(state[x].toUpperCase())
}


function* liveData() {
    let state = ['one', 'two', 'buckle', 'my', 'show'];
    let current;
    while(current = state.shift()) {
        yield current;
    }
}

let list = liveData();
let item;
while (item = list.next()) {
    if (!item.value) {
        break;
    }
    console.log('generated:', item.value);
}

function* range(start=1, end=2) {
    do {
        yield start;
    } while(++ start <= end)
}

for (let num of range(1, 3)) {
    console.log(num)
}

console.log(new Error('My Error Message').stack);

console.trace("The Stack Head")

try {
    something.that = wontwork;
} catch (thrownError) {
    // do something with the exeption we just caught
    console.log(thrownError, '@@@')
}

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err)
    console.log(err.stack)
});

setTimeout(() => {
    console.log("The exception was caught and this can run.");
}, 1000);

throwAndUncaughtException();

// catch runaway promises

process.on('unhandledRejection', (reason, Prom) => {
    console.log(`Unhandled Rejection: ${p} reason: ${reason}`);
})
