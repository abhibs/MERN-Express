var express = require('express')

app = express()

app.get('/image', function (req, res) {
  res.download('./upload/abhi.jpeg')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
