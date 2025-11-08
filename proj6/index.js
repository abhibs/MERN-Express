var express = require('express')

app = express()

app.get('/data', function (req, res) {
  let jsonData = [
    {
      name: 'Abhiram',
      city: 'Javalli',
    },
    {
      name: 'Anjan',
      city: 'Balekoppa',
    },
    {
      name: 'Aravind',
      city: 'Honnekoppa',
    },
  ]
  res.status(200).json(jsonData)
})

app.listen(8000, function () {
  console.log('Server Is Running')
})
