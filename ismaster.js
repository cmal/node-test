const cluster = require('cluster')

console.log("before fork:", cluster.isMaster)

// console.log('worker ID: ', cluster.worker.id)
console.log('workers: ', cluster.workers)
if(cluster.isMaster) {
    cluster.fork()
    console.log(cluster.isMaster)
}

if (cluster.isWorker) {
    console.log("isWorker", cluster.isMaster, cluster.isWorker)
    console.log('worker ID: ', cluster.worker.id)
}
