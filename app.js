const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const hostname = '127.0.0.1'

app.use(cors({
    origin: '*'
}))

app.listen(port, hostname, function () {
    console.log(`http://${hostname}:${port}`)
})