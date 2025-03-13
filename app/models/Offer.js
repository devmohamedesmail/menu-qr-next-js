const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    price:{
        type: Number,
        required: false
    }
});

module.exports = mongoose.models.Offer || mongoose.model("Offer", offerSchema);