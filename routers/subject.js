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
  model.Subject.findAll({
    include: [model.Teacher]
  }).then(data_Subject => {
    // projects will be an array of all Project instances
    // res.send(data_Subject)
    res.render('subject', {
      title: 'subject - School App',
      data_SubjectToEjs: data_Subject,
      session: req.session
    })
  })
})

// delete
router.get('/delete/:id', (req, res) => {
  model.Subject.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data_Subject) {
    res.redirect('../../subject');
  })
})

// add subject get
router.get('/add', function(req, res) {
  model.Subject.findAll().then(data_Subject => {
    // projects will be an array of all Project instances
    // res.send(data_Students)
    res.render('subject-add', {
      title: 'Subject Add - School App',
      data_SubjectToEjs: data_Subject
    })
  })
})

// add post subject
router.post('/add', (req, res) => {
  //const id         = req.params.id
  const subject_name = req.body.subject_name
  model.Subject.create({
      // id : id,
      subject_name: subject_name,
    })
    .then(function(data_Teacher) {
      res.redirect('../../subject');
    })
})

// update get // edit subject
router.get('/edit/:id', (req, res) => {
  model.Subject.findById(req.params.id).then(data_Subjects => {
    // res.send(data_Subjects)
    res.render('subject-edit', {
      title: 'Subject Edit - School App',
      data_SubjectsToEjs: data_Subjects
    })
  })
})

//update post // post edit
router.post('/edit/:id', (req, res) => {
  const subject_name = req.body.subject_name
  model.Subject.update({
    subject_name: subject_name
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data_Teacher) {
    res.redirect('/subject')
  })
})

// get enrolled

router.get('/:id/enrolledstudents', (req, res) => {
  model.StudentSubject.findAll({
    include: [model.Subject, model.Student],
    where: {
      SubjectId: req.params.id
    }
  }).then(data_StudentSubject => {
    // res.send(data_StudentSubject)
    res.render('subject-enrolledstudents', {
      title: 'Student Enrolled - School App',
      data_StudentSubjectjs: data_StudentSubject,
      session: req.session
    })
  })
})

//get givescore
// router.get('/:id/givescore', (req,res)=>{
//     model.StudentSubject.findAll({
//     include: [model.Subject, model.Student],
//     where: {
//       StudentId: req.params.id
//     }
//   }).then(data_StudentSubjects =>{
//       // console.log(data_StudentSubjects)
//       res.send(data_StudentSubjects)
//       res.render('givescore',{title:'Give Score - School App', data_SS:data_StudentSubjects, session: req.session})
//     }) 
// })




module.exports = router
