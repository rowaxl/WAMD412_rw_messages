const writeMessage = (req, res) => {
  if (req.method === 'POST') {
    let data = ''
    req.on('data', chunk => {
      data += chunk
    })

    req.on('end', () => {
      const fs = require('fs')

      const [_, value] = data.split('=')

      fs.appendFileSync('./public/messages', value + '\n', (err) => {
        if (err) {
          console.error(err)
          res.writeHead(500, {'Access-Control-Allow-Origin':'*'})
          res.end('Failed to save message')
          return
        }
      })
    })


    res.writeHead(200, {'Access-Control-Allow-Origin':'*'})
    res.end('Success to save message')
    return
  }

  res.write(`
  <h1>Write New Messages</h1>
  <br>
  <a href="read-message">Read Messages</a>
  <br>

  <form action="write-message" method="post">
    <input name="message" type="text" required>
    <input type="submit">
  </form>
  `)

  res.end()
}

module.exports = writeMessage
