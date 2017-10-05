// load the things we need
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// set the view engine to ejs
app.set('view engine', 'ejs');

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// load css
app.use(express.static(__dirname+'/views'))


// routes
const index = require('./routers/index')
const teacher = require('./routers/teacher')
const subject = require('./routers/subject')

app.use('/', index)
app.use('/teacher', teacher)
app.use('/subject', subject)


app.listen('3333',()=>{
  console.log('Serv listening')
})
