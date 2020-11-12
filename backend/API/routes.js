const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeControllers/homeControllers');



router.get('/', homeController.getAllProducts);

router.get('/checkout/product-details', homeController.getProductDetails);

router.post('/checkout', homeController.postCheckout);


// applying promo code
router.post('/apply-code', homeController.applyCode)

module.exports = router;