const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const db = require('./config/mongoose-connection')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())

app.use('/', indexRouter)

app.listen(5000)