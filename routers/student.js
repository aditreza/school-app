const express = require('express')
const router = express.Router()
const model = require('../models')



// get data
router.get('/',(req,res)=>{
  model.Student.findAll().then(data_Students => {
  // projects will be an array of all Project instances
  // res.send(data_Students)
  res.render('student', {data_StudentsToEjs:data_Students})
  })
})

// add get
router.get('/add', function(req,res){
  model.Student.findAll().then(data_Students => {
  // projects will be an array of all Project instances
  // res.send(data_Students)
  res.render('student-add', {data_StudentsToEjs:data_Students})
  })
})

// add post
// router.post('/add', (req, res) => {
//     const id         = req.params.id
//     const first_name = req.body.first_name
//     const last_name = req.body.last_name
//     model.Student.create({
//       id : id,
//       first_name: first_name,
//       last_name: last_name
//     })
//       .then(data_Students => {
//         res.redirect('students');
//       })
// })

// delete
router.get('/delete/:id', function(req, res) {
  model.Student.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data_Students) {
    res.redirect('../../students');
  })
})



module.exports = router
