var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');

//Product
router.get('/products/list',productController.product_list);

//Brands
router.get('/brands/list',brandController.brand_list);

module.exports=router;





