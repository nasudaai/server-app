const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("hi express")
})


app.use('/static', express.static('public'))

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})
