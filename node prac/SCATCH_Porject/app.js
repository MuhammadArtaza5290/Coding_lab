const express = require('express')
const app = express()
const path = require('path')
const db = require('./config/mongoose-connnection')
const ownersRouter = require('./routes/ownersRouter')
const productsRouter = require('./routes/porductsRouter')
const usersRouter = require('./routes/usersRouter')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use('/owners', ownersRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000)