const express = require('express')
const app = express()
const path = require('path')
const db = require('./config/mongoose-connnection')
const ownersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/porductsRouter')
const usersRouter = require('./routes/usersRouter')
const indexRouter = require('./routes/index')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
require('dotenv').config()// is line ko .env load krna ke liya use kiya jata ha jab ye require ho jay to process.env ke sath key value ko use kr ke secret value access kr sakta han. or hum is ko kahi bhi require kar ke pura project me kahi bhi use kr sakta han.

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000)