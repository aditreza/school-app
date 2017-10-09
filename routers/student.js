const express = require('express')
const router = express.Router()
const model = require('../models')



// get data
router.get('/', (req, res) => {
  model.Student.findAll().then(data_Students => {
    // projects will be an array of all Project instances
    // res.send(data_Students)
    res.render('student', {
      title: 'Student - School App',
      data_StudentsToEjs: data_Students
    })
  })
})

// add get
router.get('/add', function(req, res) {
  model.Student.findAll().then(data_Students => {
    // projects will be an array of all Project instances
    // res.send(data_Students)
    res.render('student-add', {
      title: 'Student Add - School App',
      data_StudentsToEjs: data_Students,
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
  model.Student.create({
      // id : id,
      first_name: first_name,
      last_name: last_name,
      email: email
    })
    .then(function(data_Students) {
      res.redirect('../../students');
    }).catch((err) => {
      // res.send(err.errors[0].message)
      res.render('student-add', {
        pesanError: 'The email you entered is invalid'
      })
    })
})

// update get
router.get('/edit/:id', (req, res) => {
  model.Student.findById(req.params.id).then(data_Students => {
    res.render('student-edit', {
      title: 'Student Edit - School App',
      data_StudentsToEjs: data_Students
    })
  })
})

// update post
router.post('/edit/:id', (req, res) => {
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
    .then(function(data_Students) {
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

// get subject many to many
router.get('/:id/addsubject', (req, res) => {
  model.StudentSubject.findAll().then(data_ss => {
    model.Student.findById(req.params.id).then(data_Students => {
      model.Subject.findAll().then(data_Subjects => {
        // res.send(data_Students)
        res.render('student-add-subject', {
          title: 'Student Add Subject - School App',
          data_StudentSubjectToEjs: data_ss,
          data_StudentsToEjs: data_Students,
          data_SubjectsToEjs: data_Subjects
        })
      })
    })
  })
})

// post subject many to many
router.post('/:id/addsubject', (req, res) => {
  model.StudentSubject.create({
      StudentId: req.params.id,
      SubjectId: req.body.subject_id
    })
    .then(function(data_Students) {
      res.redirect('../../students');
    })
})


module.exports = router
