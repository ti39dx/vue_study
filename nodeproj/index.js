const express = require('express')
const app = express()

app.get('/hoge', (req, res) => res.send('Hello World 3!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
