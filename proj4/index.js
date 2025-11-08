var express = require('express')

app = express()

app.get('/get', function (req, res) {
  res.end('Get')
})

app.post('/post', function (req, res) {
  res.end('Post')
})

app.put('/put', function (req, res) {
  res.end('Put')
})

app.delete('/delete', function (req, res) {
  res.end('Delete')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
