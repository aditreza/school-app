const express = require('express')
const router = express.Router()
const model = require('../models')


// get data
// get data
router.get('/',(req,res)=>{
  // res.render('teacher')
  model.Subject.findAll().then(data_Subject => {
  // projects will be an array of all Project instances
  // res.send(data_Subject)
  res.render('subject', {data_SubjectToEjs:data_Subject})
  })
})



module.exports = router
