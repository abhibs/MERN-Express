var express = require('express')

app = express()

app.get('/', function (req, res) {
  res.send('Home Page')
})


app.get('/about', function (req, res) {
  res.send('About Page')
})


app.get('/service', function (req, res) {
  res.send('Service Page')
})


app.get('/contact', function (req, res) {
  res.send('Contact Page')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
