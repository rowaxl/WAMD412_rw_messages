const http = require('http')
const index = require('./routers/index')
const writeMessage = require('./routers/writeMessage')
const readMessages = require('./routers/readMessages')

const server = http.createServer((req, res) => {
  console.log(req)

  switch (req.url) {
    case '/':
      return index(req, res)
    case '/write-message':
      return writeMessage(req, res)
    case '/read-message':
      return readMessages(req, res)
    default:
      return index(req, res)
  }
})

server.listen(3000)