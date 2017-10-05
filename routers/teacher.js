const express = require('express')
const router = express.Router()
const model = require('../models')


// get data
router.get('/',(req,res)=>{
  // res.render('teacher')
  model.Teacher.findAll().then(data_Teachers => {
  // projects will be an array of all Project instances
  // res.send(data_Teachers)
  res.render('teacher', {data_TeachersToEjs:data_Teachers})
  })
})



module.exports = router
