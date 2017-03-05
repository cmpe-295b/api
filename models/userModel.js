const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const userModel = new Schema({
    name: {type: String},
    faceApiId: {type: String}
});

module.exports= mongoose.model('User', userModel);
