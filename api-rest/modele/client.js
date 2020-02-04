const Sequelize = require('sequelize');
const sequelize = require('../initdb');
const Promo = require('./promo');

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
Client.belongsToMany(Promo, {through : 'promoclient', as: 'promos', foreignKey: 'id_promo'});
Promo.belongsToMany(Client, {through : 'promoclient', as : 'clients', foreignKey: 'id_client'});


module.exports = Client;