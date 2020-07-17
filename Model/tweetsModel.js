const {  DataTypes } = require('sequelize');
const db  = require('./../config/conn')

const Tweet = db.define('Tweet', { 
  tweet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hashtag: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: new Date(),
  updatedAt: new Date()
} );

module.exports = Tweet