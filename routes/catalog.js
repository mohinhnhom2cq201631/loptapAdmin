var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var componentController=require('../controllers/componentController');
var orderController=require('../controllers/orderController');


//Product
router.get('/products/list',productController.product_list);
router.get('/products/add',productController.product_add);

//Brands
router.get('/brands/list',brandController.brand_list);
router.get('/brands/add',brandController.brand_add);

//Components
router.get('/components/list',componentController.component_list);
router.get('/components/add',componentController.component_add);

//Orders
router.get('/orders/list',orderController.order_list);

module.exports = router;





