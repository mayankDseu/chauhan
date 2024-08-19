const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({

    user: { type: String },
    items: [{
      item: { type: String},
      quantity: { type: Number },
      sale_price: { type: Number},
      total_amount: { type: Number }
    }],
    transaction_type: { 
      type: String, 
      enum: ['credit', 'debit'], 
      required: true 
    },
    bill_amount: { type: Number, required: false, default: 0 }
  }, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
  });
  



module.exports = mongoose.model('Sale', saleSchema)