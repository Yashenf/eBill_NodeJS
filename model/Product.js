const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required: true
    },
    unitPrice:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Product',productSchema);