const express = require('express');
const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const dotenv=require('dotenv').config();

const app = express();

mongoose.connect('mongodb+srv://ra:ra@cluster0.d70b8rk.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());
    module.exports = app;