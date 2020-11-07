

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
    // req-data => promo-code, Start-date, Expiry-date, Discount rate, useagetimes, active

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