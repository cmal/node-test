let eventSource = new EventSource('/login');

// only 3 default events: message, open, error
eventSource.addEventListener('message', (broadcast) => {
    console.log('got message: ' + broadcast);
    document.getElementById('clock').innerHTML = broadcast.data
});

eventSource.addEventListener('open', () => {
    console.log('connection opened')
});

eventSource.addEventListener('error', () => {
    console.log('connection error/closed');
});
