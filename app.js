const express = require('express')
const app = express()
const port = 4000

app.get('/xxx', (req, res) => res.send('fucking world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))