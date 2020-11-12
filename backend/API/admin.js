const express = require('express');

const router = express.Router();

 const adminController = require('../controllers/adminControllers/adminControllers');

// // admin sign-in  route
 router.post('/signin', adminController.signin);

// // admin Add-New_product route
router.post('/add-product', adminController.addNewProduct);
router.get('/show-products', adminController.showProducts);

// admin promo-codes routes
router.post('/add-promo', adminController.addNewPromo);
router.get('/get-promo', adminController.getPromo);
router.put('/edit-promo/:promoId', adminController.editPromo);

// // admin orders routes
router.get('/get-orders', adminController.getOrders);
router.post('/confirm-order', adminController.confirmOrder);
router.post('/cancel-order', adminController.cancelOrder);

module.exports = router;