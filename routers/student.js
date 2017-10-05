const express = require('express')
const router = express.Router()
const model = require('../models')


// get data
// get data
router.get('/',(req,res)=>{
  // res.render('teacher')
  model.Student.findAll().then(data_Students => {
  // projects will be an array of all Project instances
  // res.send(data_Subject)
  res.render('student', {data_StudentsToEjs:data_Students})
  })
})



module.exports = router
