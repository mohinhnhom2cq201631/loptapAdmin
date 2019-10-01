var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var componentController=require('../controllers/componentController');
var orderController=require('../controllers/orderController');


//Product
router.get('/products/list',productController.product_list);

//Brands
router.get('/brands/list',brandController.brand_list);

//Brands
router.get('/components/list',componentController.component_list);

//Orders
router.get('/orders/list',orderController.order_list);

module.exports = router;





