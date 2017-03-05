const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const barcodeModel= new Schema({ code: {type: String}});

const productModel = new Schema({
    title: {
        type: String
    },
    price: {type: Number},
    barcode: barcodeModel
    //read: {type: Boolean, default:false}
});

module.exports= mongoose.model('Product', productModel);
