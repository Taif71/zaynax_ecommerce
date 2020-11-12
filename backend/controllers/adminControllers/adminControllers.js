const mongoose = require('mongoose');

// requiring the data models
const Promo = require('../../models/promo-code');
const Order = require('../../models/orders');
const Product = require('../../models/product');
const Admin = require('../../models/admin-user');

const signin = (req, res) => {

    let name = req.body.adminName;
    let password = req.body.password;

    const admin = new Admin({
        adminName: name,
        password: password
    });
    admin.save().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json(err);
    })

}

// ***** products ******
const addNewProduct = (req, res) => {
    // req data => image, product-name, original-price, discount-rate, shipping-charge, color, size, active 

    let image = req.body.image;
    let productName = req.body.productName;
    let price = req.body.price;
    let discountRate = req.body.discountRate;
    let shippingCharge = req.body.shippingCharge;
    let color = req.body.color;
    let size = req.body.size;
    let active = req.body.active;    

    const product = new Product({
        image: image,
        productName: productName,
        price: price,
        discountRate: discountRate,
        shippingCharge: shippingCharge,
        color: color,
        size: size,
        active: active
    });
    // work to do: you need to upload image then resize it to 500 * 500 here before putting it in the DB
    product.save()
           .then(result => {
                res.status(200).json(result);
           }).catch(err => {
                res.status(404).json('Error is ' + err);
           });

}

const showProducts = (req, res) => {
    // req data => image, product-name, Original-price, discount-rate
    // unlimited scrolling. Fix this
    Product.find({})
           .then(result => {
            //    for(let i=0; i< result.length; i++)
            //    {
                   if(result.active === true) {
                    res.status(200).json(result);
                   } else if(result.active === false) {
                    // res.status(200).json(result);
                   } 
               //}
                            
           }).catch(err => {
            res.status(404).json(err);
           });
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
    Promo.find({})
           .then(result => {
               res.status(200).json(result);
           }).catch(err => {
               res.status(404).json('The error is: ' + err);
           })
}

const editPromo = (req, res) => {
    // not completed yet.needs work ****************
  //  const code = req.body.code;
    let startDate = req.body.startDate;
    let expiryDate = req.body.expiryDate;
    let discountRate = req.body.discountRate;
    let usageTimes = req.body.usageTimes;
    let activeStatus = req.body.activeStatus; 

    const promo_Id = req.params.promoId;

    Promo.findByIdAndUpdate(
       promo_Id , {        
        startDate: startDate,
        expiryDate: expiryDate,
        discountRate: discountRate,
        usageTimes: usageTimes,
        activeStatus: activeStatus
    }).then(result => {
        res.statuss(200).json('Updated results: ' + result);
    }).catch(err => {
        res.status(404).json(err);
    });



}


// ******* Orders ********
const getOrders = (req, res) => {

    // let order_num = req.body.orderNo;
    // let item_price = req.body.price;
    // let order_status = req.body.status;
    Order.find({})
         .then(result => {
            res.status(200).json(result);
         })
         .catch(err => {
            res.status(404).json('The error is: ' + err);
         })
}

const confirmOrder = (req, res) => {
    //let orderNo = req.body.orderNo;

}

const cancelOrder = (req, res) => {

}


module.exports = {
    signin,
    addNewProduct,
    showProducts,
    addNewPromo,
    getPromo,
    editPromo,
    getOrders,
    confirmOrder,
    cancelOrder
}