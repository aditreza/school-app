const express = require('express')
const router = express.Router()


// get data
router.get('/',(req,res)=>{
  res.render('index')
})



module.exports = router
