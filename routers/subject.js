const express = require('express')
const router = express.Router()
const model = require('../models')


// get data
router.get('/',(req,res)=>{
  // res.render('teacher')
  model.Subject.findAll({include : [model.Teacher]}).then(data_Subject => {
  // projects will be an array of all Project instances
  // res.send(data_Subject)
  res.render('subject', {data_SubjectToEjs:data_Subject})
  })
})

// delete
router.get('/delete/:id',(req,res)=>{
  model.Subject.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data_Subject) {
    res.redirect('../../subject');
  })
})



module.exports = router
