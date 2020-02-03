const Sequelize = require('sequelize');
const sequelize = require('../initdb');
const Model = Sequelize.Model;
class Client extends Model { }
Client.init({
   nom: {
      type: Sequelize.STRING,
      allowNull: false
   },
   prenom: {
      type: Sequelize.STRING,
      allowNull: false
   },
   email: {
      type: Sequelize.STRING,
      allowNull: false
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false
   }
}, {
   sequelize,
   modelName: 'client'
});

module.exports = Client;