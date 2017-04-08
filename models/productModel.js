const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productModel = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    discount: {type: Number},
    newPrice: {type: Number},
    barcodeId: {type: String}
    //read: {type: Boolean, default:false}
});

module.exports= mongoose.model('Product', productModel);
