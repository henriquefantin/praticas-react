const dns = require('node:dns');

// The local DNS resolver refuses SRV lookups on this machine. Allow overriding
// the resolver list with MONGODB_DNS_SERVERS (comma-separated) in .env.
const dnsServers = (process.env.MONGODB_DNS_SERVERS || '1.1.1.1,1.0.0.1')
    .split(',')
    .map(server => server.trim())
    .filter(Boolean);

if (dnsServers.length > 0) {
    dns.setServers(dnsServers);
}

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
