const Sequelize = require('sequelize');
const sequelize = require('../initdb');

const Model = Sequelize.Model;

class Promo extends Model { }
Promo.init({
   code: {
      type: Sequelize.STRING,
      allowNull: false
   },
   libelle: {
      type: Sequelize.STRING,
      allowNull: false
   },
   pourcentage: {
      type: Sequelize.FLOAT,
      allowNull: false
   },
   marque: {
      type: Sequelize.STRING,
      allowNull: false
   },
   dateperemption: {
      type: Sequelize.DATE,
      allowNull: false
   }
}, {
   sequelize,
   modelName: 'promo'
});

module.exports = Promo;