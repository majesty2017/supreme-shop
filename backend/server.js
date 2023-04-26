const app = require('./app');
const connectDatabase = require('./db/Database');

//  Handling uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
    server.close(() => {
        process.exit(1)
    })
})

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: "backend/config/.env'"
    })
}

// connect db
connectDatabase()

// create server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 8001}`);
})

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for promise rejection`);
    server.close(() => {
        process.exit(1)
    })
})
