const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    categoryid:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.Meal || mongoose.model("Meal", mealSchema);