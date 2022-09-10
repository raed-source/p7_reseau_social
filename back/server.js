// const express=require('express');
// const mongoose= require('mongoose');
// const cors= require('cors');
// const bcrypt= require('bcrypt');
// const cookieParser = require('cookie-parser');
// const authRouter= require('./routers/authRouter');
// const dotenv=require('dotenv').config();
// const app= express();
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser);

// const port = process.env.PORT|| 3000;
// app.get('/',(req,res)=>{
//     res.status(500).send('hello !');
// })

// app.listen(port,()=>{
//     console.log(`app is running on port ${port}`);
// })
const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

server.listen(port);
