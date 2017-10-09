const express = require('express')
const router = express.Router()


router.use(function(req,res,next){
	// console.log(req.session)
	if(req.session && req.session.hasOwnProperty('username')){
		next()
	}else{
		res.redirect('/login')
	}
})

// get data
router.get('/',(req,res)=>{
  res.render('index', {title:'Home - School App', session:req.session})
})



module.exports = router
