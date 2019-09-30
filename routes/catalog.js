var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var purposeController=require('../controllers/purposeController');
var orderController=require('../controllers/orderController');


//Product
router.get('/products/list',productController.product_list);

//Brands
router.get('/brands/list',brandController.brand_list);

//Brands
router.get('/purposes/list',purposeController.purpose_list);

//Orders
router.get('/orders/list',orderController.order_list);

module.exports = router;





