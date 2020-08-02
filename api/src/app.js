const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Rotas
const indexRoute = require('./routes/index-route')
const cadastroRoute = require('./routes/cadastro-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/cadastroNewsletter', cadastroRoute)

module.exports = app