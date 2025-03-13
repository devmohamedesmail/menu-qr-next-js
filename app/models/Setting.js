const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    currency:{
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.models.Setting || mongoose.model("Setting", settingSchema);