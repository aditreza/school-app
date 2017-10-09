// load the things we need
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const	swal = require('sweetalert')
const	session = require('express-session')


// set the view engine to ejs
app.set('view engine', 'ejs')
// const path = require('path')
// app.set('views', path.join(__dirname, 'views'))

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// load css
app.use(express.static(__dirname+'/views'))

// session
app.use(session({
    secret: 'livelyfox',
    resave: false,
    saveUninitialized: true
}))

// routes
const index = require('./routers/index')
const teacher = require('./routers/teacher')
const subject = require('./routers/subject')
const student = require('./routers/student')
const login = require('./routers/login')
const logout = require('./routers/logout')
const signup = require('./routers/signup')

app.use('/login', login)
app.use('/signup', signup)
app.use('/', index)
app.use('/teacher', teacher)
app.use('/subject', subject)
app.use('/students', student)
app.use('/logout', logout)


app.listen('3333',()=>{
  console.log('Serv listening')
})
