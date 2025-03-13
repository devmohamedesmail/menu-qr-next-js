const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://devmohamedesmail:Mm19921125@nodejsprojects.0ok81.mongodb.net/menu-returant-next");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;