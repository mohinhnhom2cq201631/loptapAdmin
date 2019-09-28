var express = require('express');
var router = express.Router();

var usersController=require('../controllers/userController');
var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var adminController=require('../controllers/adminController');

//Product
router.get('/products/list',productController.product_list);

//Users
router.get('/users/list',usersController.user_list);

//Admin
router.get('/admin/list',adminController.admin_list);

//Brands
router.get('/brands/list',brandController.brand_list);

module.exports=router;





