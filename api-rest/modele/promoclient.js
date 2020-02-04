const Sequelize = require('sequelize');
const sequelize = require('../initdb');

const Model = Sequelize.Model;

class Promoclient extends Model { }
Promoclient.init({
   id_client: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
         model: 'client',
         key: 'id'
      }
   },
   id_promo: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
         model: 'promo',
         key: 'id'
      }
   }
}, {
   sequelize,
   tableName: 'promoclient'
});


module.exports = Promoclient;
