const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const quoteRoutes = require('./routes/quotes')

app.use('/pages', express.static(path.join(__dirname, 'pages')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-info', (req, res) => {
  res.send('Hello World!')
})

app.use('/quotes', quoteRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
