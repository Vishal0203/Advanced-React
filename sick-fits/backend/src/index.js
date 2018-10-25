require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Todo use express middleware to handle cookies (JWT)
// Todo use express middleware to populate current user

const options = {
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
};

server.start(options, (server) => {
    console.log(`Server running on http://localhost:${server.port}`)
});

