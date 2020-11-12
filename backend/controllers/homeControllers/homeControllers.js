
const Product = require('../../models/product');

// ****** homecontrollers
const getAllProducts = (req, res) => {
    // req data => image, product-title, discount, original price

    Product.find({})
        .then(result => {
            if(result.active === true){
                res.status(200).json(result);
            }
        })
        .catch(err => {
            res.status(404).json(err);
        })
}

const getProductDetails = (req, res) => {

}


const postCheckout = (req, res) => {
    // req-data => 
}

const applyCode = (req, res) => {
    // req-data => promo code
    
}

// ******* applying promocode ********

module.exports = {
    getAllProducts,
    getProductDetails,
    postCheckout,
    applyCode

}