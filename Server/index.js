const express = require('express');

const app = express()

const port = 4000

app.use(express.json())

app.listen(port, () => {
  console.log(`It's over Anakin! I have the ${port} port!`)
})