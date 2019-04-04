const express = require('express')

const app = express()
const port = process.env.port || 8000

app.get('/', (req, res) => { res.end('Hello world') })

const server = require('http').createServer(app)
server.listen(port, () => {
  console.log('Express server listening on port ' + server.address().port)
})

process.on('SIGINT', () => {
  console.info('SIGINT signal received.')
  // Stops the server from accepting new connections and finishes existing connections.
  // server.close(function(err) {
  //   if (err) {
  //     console.error(err)
  //     process.exit(1)
  //   }
  // })
})
