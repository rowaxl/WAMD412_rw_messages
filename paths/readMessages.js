const fs = require('fs')

const readMessages = (req, res) => {
  const raw = fs.readFileSync('./public/messages', {encoding:'utf8', flag:'r'})
  const messages = raw.split('\n').join('<br>')

  res.write(`
  <h1>Read Messages</h1>
  <br>
  <a href="write-message">Write New Message</a>
  <br>
  <h3>Messages</h3>
  ${messages}
  `)

  res.end()
}

module.exports = readMessages
