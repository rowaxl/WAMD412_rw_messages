const index = (req, res) => {
  res.write(`
  <h1>Hello Node!</h1>
  <br>
  <a href="read-message">Read Messages</a>
  <br>
  <a href="write-message">Write New Message</a>
  `)
  res.end()
}

module.exports = index
