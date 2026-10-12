const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => { 
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@clustertest.dlbcz5u.mongodb.net/?appName=ClusterTest&retryWrites=true&w=majority`);
        console.log('MongoDB connected');
        
        return dbConn;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

conn();

module.exports = conn;