const express = require('express')
const app = express()
const port = 3000


const date = new Date()
const [year, month, day] = [ date.getFullYear(), date.getMonth()+1, date.getDate()];
const response = (`${year}${month}${day}`)
const hash = process.env.GITHUB_SHA


app.get('/', (req, res) => {
  
  res.send("Hello world CIRONE y MATRERO ... V. " + response + hash)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
