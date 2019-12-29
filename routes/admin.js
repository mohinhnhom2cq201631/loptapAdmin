var express = require('express');
var router = express.Router();

var adminController=require('../controllers/adminController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Admin
router.get('/admins/list', ensureAuthenticated,adminController.admin_list);

router.get('/admins/login',adminController.admin_login_get);
router.get('/admins/register',adminController.admin_register_get);
router.post('/admins/register',adminController.admin_register_post);
router.post('/admins/login',adminController.admin_login_post);
router.get('/admins/logout', adminController.admin_logout);

module.exports=router;





