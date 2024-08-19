const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    sale_price: {
        type: Number,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    stocks:{
        type:Number,
        required:true
    },
    HSN_code:{
        type:String,
        
    },
    stock_value: { type: Number }

})

module.exports = mongoose.model('Product', productSchema)