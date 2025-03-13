const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    tableno: {
        type: Number,
        required: true
    },
    meals: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);