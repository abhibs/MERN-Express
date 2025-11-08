var express = require('express')

app = express()

app.get('/home', function (req, res) {
  res.status(200).send('Home')
})

app.get('/dashboard', function (req, res) {
  res.status(401).send('Unautherised Access')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
