const express = require('express')
const app = express()
const port = 3000

const hash = process.env.GIT_COMMIT
const tiempo = process.env.TIME


app.get('/', (req, res) => {
  
  res.send("Hello world CIRONE y MATRERO" + "V. " + hash + tiempo)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
