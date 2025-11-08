var express = require('express')

app = express()

app.get('/abhi', function (req, res) {
  res.redirect('http://localhost:8000/abhiram')
})

app.get('/abhiram', function (req, res) {
  res.status(200).send('Abhiram B S Javalli Tudoor Thirthahalli')
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
