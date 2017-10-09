const express = require('express')
const router = express.Router()
const model = require('../models')


router.get('/', (req,res)=>{
	model.User.findAll().then(dataUser =>{
		res.render('signup', {title: 'Signup - School app', dataUserToEjs:dataUser})
	})
})

module.exports = router