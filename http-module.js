const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the Home page')
  }
  if (req.url === '/about') {
    res.end('This is the About Page')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We cant find the page</p>
    <a href="/">back Home</a>
    `)
})
server.listen(5000)

//req represent the incoming information
// res is what we are sending back
