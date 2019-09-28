const express = require('express');
const router = express.Router();

const dashboardController=require('../controllers/dashboardController')

// Welcome Page
router.get('/', (req, res) => res.render('dashboard'));

// Dashboard
router.get('/dashboard', dashboardController.homepage);

module.exports = router;