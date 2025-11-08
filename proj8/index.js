var express = require('express')

app = express()

app.get('/abhi', function (req, res) {
  res.redirect('http://localhost:8000/abhiram')
})

app.get('/abhiram', function (req, res) {
  res.download('./upload/abhi.jpeg')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
