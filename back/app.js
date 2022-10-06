const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const app = express();
// ----------ROUTERS---------
const userRouter= require('./routers/user.route');
const path = require('path');
const bodyParser = require('body-parser');


// ----------APP USE----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/user',userRouter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// ----------------RECUPERER LES ROUTES------------------


app.use(express.json());


app.use(cors());
app.use(cookieParser());
module.exports = app;
