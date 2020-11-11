const mongoose = require('mongoose');

const Promo = require('../../models/promo-code');

const signin = (req, res) => {

}

// ***** products ******
const addNewProduct = (req, res) => {
    // req data => image, product-name, original-price, discount-rate, shipping-charge, color, size, active 


}

const showProducts = (req, res) => {
    // req data => image, product-name, Original-price, discount-rate
}


// ********* promotions ********
const addNewPromo = (req, res) => {
   

    const code = req.body.code;
    const startDate = req.body.startDate;
    const expiryDate = req.body.expiryDate;
    const discountRate = req.body.discountRate;
    const usageTimes = req.body.usageTimes;
    const activeStatus = req.body.activeStatus;

    code.toUpperCase(); // this is currently not working. need to fix this
    // use moment.js to post the dates into correct format to the DB
    // make sure the code has only 6 digits
    
    // creating and saving data to the database
    const promo = new Promo({
        code: code,
        startDate: startDate,
        expiryDate: expiryDate,
        discountRate: discountRate,
        usageTimes: usageTimes,
        activeStatus: activeStatus

    });

    promo.save()
         .then(result => {
            res.status(200).json(result);
         })
         .catch(err => {
            res.status(404).json('The error is: ' + err);
         });
}

const getPromo = (req, res) => {
    // req.data => promo-code, created time , usagetimes, discount rate, start, expiry date, active,deactive

    
}

const editPromo = (req, res) => {
    // req.data => promo-code(unchangeble), created time , usagetimes, discount rate, start, expiry date, active,deactive


}


// ******* Orders ********
const getOrders = (req, res) => {

}

const confirmOrders = (req, res) => {

}

const deleteOrders = (req, res) => {

}


module.exports = {
    signin,
    addNewProduct,
    showProducts,
    addNewPromo,
    getPromo,
    editPromo,
    getOrders,
    confirmOrders,
    deleteOrders
}