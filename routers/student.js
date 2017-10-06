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
  res.render('student-add', {data_StudentsToEjs:data_Students, pesanError:null})
  })
})

// add post
router.post('/add', (req, res) => {
    //const id         = req.params.id
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    model.Student.create({
      // id : id,
      first_name: first_name,
      last_name: last_name,
      email: email
    })
      .then(function (data_Students){
        res.redirect('../../students');
      }).catch((err)=>{
        // res.send(err.errors[0].message)
        res.render('student-add', { pesanError : 'The email you entered is invalid' })
      })
})

// update get
router.get('/edit/:id', (req,res)=>{
  model.Student.findAll().then(data_Students =>{
    res.render('student-edit', {data_StudentsToEjs:data_Students})
  })
})

// update post
router.post('/edit/:id', (req,res)=>{
  //const id         = req.params.id
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  model.Student.create({
    // id : id,
    first_name: first_name,
    last_name: last_name,
    email: email
  })
    .then(function (data_Students){
      res.redirect('../../students');
    })
})

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
