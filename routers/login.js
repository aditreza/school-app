const	express = require('express')
const	router = express.Router()
const model = require('../models')

// GET data
router.get('/', (req,res)=>{
	// console.log('test')
	// model.User.findAll().then(data_Users => {
		res.render('login', {title : 'login - School app'})
	// })
	
})

// POST
router.post('/', (req,res) =>{
	model.User.findAll().then(data_Users =>{
		// res.send(data_Users)
		for(let i=0; i<data_Users.length; i++){
			if(req.body.your_user_name === data_Users[i].username && req.body.your_password === data_Users[i].password ){
				req.session.username = req.body.your_user_name // session
				req.session.role = data_Users
				res.render('index', {title: 'Dashboard - School app'})
			}else{
				res.render('login', {title: 'login - School app', dataUserToEjs:data_Users})
			}
		}
	}).catch(function(err){
		console.log('login error')
	})
})


module.exports = router