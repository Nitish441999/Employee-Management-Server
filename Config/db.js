const mongoose = require('mongoose');

// Connection to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error('DB Connection Error:');
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDb;
