const mongoose = require('mongoose');
const config = require('../config.js');

const DB_URI = config.development.mongoUri;

module.exports = () => {
    const connection = async () => {
        try {
            await mongoose.connect(DB_URI);
            console.log('DB successful connection!');
        } catch (err) {
            console.error(new Error('DB connection error!'));
        }
    };
    connection();
};
