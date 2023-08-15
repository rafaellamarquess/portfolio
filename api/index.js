const express = require('express')
const cors = require('cors')
const router = require('./routes.js')


const port = 8080

const app = express()


app.use(express.json())

app.use(cors())

app.use(router)

app.listen(port, () => console.log('ROLOU'))
