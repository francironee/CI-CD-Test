const express = require('express')
const app = express()
const port = 3000

  const date = new Date()
  const [month, day, year] = [date.getMonth()+1, date.getDate(), date.getFullYear()];
  const response = (`${day}${month}${year}`)
  const hash = process.env.GIT_COMMIT


app.get('/', (req, res) => {
  
  res.send("Hello world!!" + "V. " + hash + response)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
