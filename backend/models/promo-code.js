const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promoSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    startDate:{
        type:  Date,
        required: true
    },
    expiryDate:{
        type:  Date,
        required: true
    },
    discountRate: {
        type: Number,
        required: true
    },
    usageTimes: {
        type:  Number,
        required: true
    },
    activeStatus: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Promo', promoSchema);