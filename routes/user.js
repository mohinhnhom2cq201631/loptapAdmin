var express = require('express');
var router = express.Router();

var userController=require('../controllers/userController');

//user
router.get('/users/list',userController.user_list);

module.exports=router;




