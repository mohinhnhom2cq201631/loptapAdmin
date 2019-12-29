var express = require('express');
var router = express.Router();

var productController=require('../controllers/productController');
var brandController=require('../controllers/brandController');
var componentController=require('../controllers/componentController');
var orderController=require('../controllers/orderController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


//Product
router.get('/products/list', ensureAuthenticated,productController.product_list);
router.get('/products/add', ensureAuthenticated,productController.product_add_get);
router.post('/products/add', ensureAuthenticated,productController.product_add_post);
router.get('/products/update/:id', ensureAuthenticated,productController.product_update_get);
router.post('/products/update/:id', ensureAuthenticated,productController.product_update_post);

//Brands
router.get('/brands/list', ensureAuthenticated,brandController.brand_list);
router.get('/brands/add', ensureAuthenticated,brandController.brand_add_get);
router.post('/brands/add', ensureAuthenticated,brandController.brand_add_post);
router.get('/brands/update/:id', ensureAuthenticated,brandController.brand_update_get);
router.post('/brands/update/:id', ensureAuthenticated,brandController.brand_update_post);

//Components
router.get('/components/list', ensureAuthenticated,componentController.component_list);
router.get('/components/add', ensureAuthenticated,componentController.component_add_get);
router.post('/components/add', ensureAuthenticated,componentController.component_add_post);
router.get('/components/update/:id', ensureAuthenticated,componentController.component_update_get);
router.post('/components/update/:id', ensureAuthenticated,componentController.component_update_post);

//Orders
router.get('/orders/list', ensureAuthenticated,orderController.order_list);

module.exports = router;





