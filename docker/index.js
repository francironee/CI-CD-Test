const express = require('express')
const app = express()
const port = 3000

const gitHash = process.env.GITHASH
const date = process.env.DATE

app.get('/', (req, res) => {
  res.send("Hello world CIRONE y MATRERO ... V. " + date + gitHash)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app
