const express = require('express')
const router = express.Router()
const model = require('../models')

router.use(function(req,res,next){
  // console.log(req.session)
  if(req.session && req.session.hasOwnProperty('username')){
    next()
  }else{
    res.redirect('/login')
  }
})

// get data
router.get('/', (req, res) => {
  // res.render('teacher')
  model.Teacher.findAll({
    include: [model.Subject]
  }).then(data_Teachers => {
    // res.send(data_Teachers)
    res.render('teacher', {
      title: 'Teacher - School App',
      data_TeachersToEjs: data_Teachers,
      session: req.session
    })
    // model.Subject.findAll().then(data_Subject=>{
    // res.render('teacher', {data_TeachersToEjs:data_Teachers,data_SubjectToEjs:data_Subject})
    // })
    // projects will be an array of all Project instances
    // res.send(data_Teachers)
  })
})

// update get
router.get('/edit/:id', (req, res) => {
  model.Teacher.findById(req.params.id).then(data_Teachers => {
    model.Subject.findAll().then(data_Subject => {
      res.render('teacher-edit', {
        title: 'Teacher Edit - School App',
        data_TeachersToEjs: data_Teachers,
        data_SubjectToEjs: data_Subject
      })
    })
  })
})

//update post
router.post('/edit/:id', (req, res) => {
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  const subject_name = req.body.subject_name
  model.Teacher.update({
    first_name: first_name,
    last_name: last_name,
    email: email,
    SubjectId: subject_name,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data_Teacher) {
    res.redirect('/teacher')
  })
})

// delete
router.get('/delete/:id', function(req, res) {
  model.Teacher.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data_Teacher) {
    res.redirect('../../teacher');
  })
})

// add get
router.get('/add', function(req, res) {
  model.Teacher.findAll().then(data_Teacher => {
    // projects will be an array of all Project instances
    // res.send(data_Students)
    res.render('teacher-add', {
      title: 'Teacher Add - School App',
      data_TeachersToEjs: data_Teacher,
      pesanError: null
    })
  })
})

// add post
router.post('/add', (req, res) => {
  //const id         = req.params.id
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  model.Teacher.create({
      // id : id,
      first_name: first_name,
      last_name: last_name,
      email: email
    })
    .then(function(data_Teacher) {
      res.redirect('../../teacher');
    }).catch((err) => {
      // res.send(err.errors[0].message)
      res.render('teacher-add', {
        pesanError: 'The email you entered is invalid'
      })
    })
})



module.exports = router
