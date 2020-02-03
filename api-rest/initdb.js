const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, {
   host: config.DB_HOST,
   dialect: 'mysql',
   define: {
      timestamps: false,
      freezeTableName: true
   }
});

sequelize
   .authenticate()
   .then(() => {
      console.log('Connection has been established successfully.');
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err);
   });

module.exports = sequelize;