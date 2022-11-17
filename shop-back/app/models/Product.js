const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Products = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true, maxLength: 600},
    // image: {type: String, minLength: 5},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Products', Products)  