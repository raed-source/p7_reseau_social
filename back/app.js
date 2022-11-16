const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const app = express();
// ----------ROUTERS---------
const userRouter = require('./routers/user.route');
const path = require('path');
const bodyParser = require('body-parser');


// ----------APP USE----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/user', userRouter);

app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
}));
app.use((req, res, next) => {
    // origine, droit d'accéder c'est tout le monde '*'
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:4200');
    // headers, ce sont les headers acceptés (en-tête)
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    // methods,  ce sont les méthodes acceptés (verbe de requete)
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// ----------------RECUPERER LES ROUTES------------------


app.use(express.json());
app.use(cookieParser());
module.exports = app;
