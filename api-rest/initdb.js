const Sequelize = require('sequelize');
const config = require('./config');
const logger = require('./helper/logger');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, {
   host: config.DB_HOST,
   dialect: 'mysql',
   define: {
      timestamps: false,
      freezeTableName: true
   },
   logging:false
});

sequelize
   .authenticate()
   .then(() => {
      logger.hello('Connection has been established successfully.');
   })
   .catch(err => {
      logger.red('Unable to connect to the database:', err);
   });

module.exports = sequelize;