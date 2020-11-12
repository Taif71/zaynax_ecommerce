const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    
   image: {
       type: String,
       required: true
   },
   productName: {
       type: String,
       required: true
   },
   price: {
       type: Number,
       required: true
   },
   discountRate: {
       type: Number,
       required: true
   },
   shippingCharge: {
       type: Number,
       required: true
   },
   color: {
       type: String,
       required: true
   },
   size: {
       type: String,
       required: true
   },
   active: {
       type: Boolean,
       required: true
   }
   //createdDate: Date.now
});

module.exports = mongoose.model('Product', productSchema);