var express = require('express');
var router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

var userController=require('../controllers/userController');

//user
router.get('/users/list',ensureAuthenticated,userController.user_list);
router.get('/users/add',ensureAuthenticated,userController.user_add);
module.exports=router;





