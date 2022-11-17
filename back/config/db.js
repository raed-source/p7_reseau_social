const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });

mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.MDP}@${process.env.DB_CLUSTE}/test`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));