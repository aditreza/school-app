const	express = require('express')
const	router = express.Router()

//get data
router.get('/', (req,res)=>{
	res.render('login', {title : 'login - School app'})
})



module.exports = router