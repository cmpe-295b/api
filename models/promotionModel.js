const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const promotionModel = new Schema({
    title: { type: String },
    price: {type: Number},
    discount: {type: Number},
    newPrice: {type: Number},
    product_id: {type: String}
});

module.exports= mongoose.model('Promotion', promotionModel);
