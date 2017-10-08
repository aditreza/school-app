const express = require('express')
const router = express.Router()
const model = require('../models')


// get data
router.get('/',(req,res)=>{
  // res.render('teacher')
  model.Subject.findAll({include : [model.Teacher]}).then(data_Subject => {
  // projects will be an array of all Project instances
  // res.send(data_Subject)
  res.render('subject', {title:'subject', data_SubjectToEjs:data_Subject})
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

// add subject get
router.get('/add', function(req,res){
  model.Subject.findAll().then(data_Subject => {
  // projects will be an array of all Project instances
  // res.send(data_Students)
  res.render('subject-add', {title:'Subject Add', data_SubjectToEjs:data_Subject})
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
      .then(function (data_Teacher){
        res.redirect('../../subject');
      })
})

// update get // edit subject
router.get('/edit/:id', (req,res)=>{
    model.Subject.findById(req.params.id).then(data_Subjects =>{
      // res.send(data_Subjects)
      res.render('subject-edit',{title:'Subject Edit', data_SubjectsToEjs:data_Subjects })
    })
})

//update post // post edit
router.post('/edit/:id',(req,res)=>{
  const subject_name   = req.body.subject_name
  model.Subject.update({
    subject_name:subject_name
  },{
    where :{
      id: req.params.id
    }
}).then(function(data_Teacher){
    res.redirect('/subject')
  })
})

// get enrolled

router.get('/:id/enrolledstudents', (req, res) =>{
  model.StudentSubject.findAll({
    include : [model.Subject, model.Student]
  }).then(data_StudentSubject => {
    // res.send(data_StudentSubject)
    res.render('subject-enrolledstudents', {title: 'Student Enrolled', data_StudentSubjectjs:data_StudentSubject })
  })
})




module.exports = router
