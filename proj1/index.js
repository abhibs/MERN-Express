var express = require('express')

app = express()

app.get('/', function (req, res) {
  res.send('Abhiram B S')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
