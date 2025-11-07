var express = require('express')

app = express()

app.get('/get', function (req, res) {
  res.send('Get')
})

app.post('/post', function (req, res) {
  res.send('Post')
})

app.put('/put', function (req, res) {
  res.send('Put')
})

app.delete('/delete', function (req, res) {
  res.send('Delete')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
