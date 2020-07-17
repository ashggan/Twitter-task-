const { Sequelize } = require('sequelize');

const db = new Sequelize('twitter', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'  
  });

module.exports  = db
