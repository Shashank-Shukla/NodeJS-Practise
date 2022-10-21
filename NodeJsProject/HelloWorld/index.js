const express = require('express')
const app = express()
const port = 6969

app.get('/', (req, res) => {
    res.send('Hello World! Shashank Here.');
})

app.listen(port, () => {
    console.log(`Hello World app is listening on port number: ${port}!`)
})