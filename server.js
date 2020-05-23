const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const app = express()

/** PASSAPORT BASIC **/
//passport.use(require('./src/auth/basic'))
//app.get('*', passport.authenticate('basic', { session: false }))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(session({ secret: '!@56YTREHGFF@#$!890', resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/routes')(app)
require('./src/db/db')

app.listen(9000, () => {
    console.log('Servidor rodando na porta 9000')
})