var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var componentController=require('../controllers/componentController');
var orderController=require('../controllers/orderController');


//Product
router.get('/products/list',productController.product_list);
router.get('/products/add',productController.product_add_get);
router.post('/products/add',productController.product_add_post);
router.get('/products/update/:id',productController.product_update_get);
router.post('/products/update/:id',productController.product_update_post);

//Brands
router.get('/brands/list',brandController.brand_list);
router.get('/brands/add',brandController.brand_add_get);
router.post('/brands/add',brandController.brand_add_post);
router.get('/brands/update/:id',brandController.brand_update_get);
router.post('/brands/update/:id',brandController.brand_update_post);

//Components
router.get('/components/list',componentController.component_list);
router.get('/components/add',componentController.component_add_get);
router.post('/components/add',componentController.component_add_post);
router.get('/components/update/:id',componentController.component_update_get);
router.post('/components/update/:id',componentController.component_update_post);

//Orders
router.get('/orders/list',orderController.order_list);

module.exports = router;





