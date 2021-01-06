const index = require('./paths/index')
const writeMessage = require('./paths/writeMessage')
const readMessages = require('./paths/readMessages')

const router = (req, res) => {
  // console.log(req)

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
}

module.exports = router