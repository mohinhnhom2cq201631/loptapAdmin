var express = require('express');
var router = express.Router();

var adminController=require('../controllers/adminController');

//Admin
router.get('/admins/list',adminController.admin_list);

module.exports=router;





