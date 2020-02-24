const dotenv = require('dotenv');
dotenv.config();

module.exports = {
   API_PORT : process.env.API_PORT,
   DB_HOST : process.env.DB_HOST,
   DB_PORT : process.env.DB_PORT,
   DB_NAME : process.env.DB_NAME,
   DB_USER: process.env.DB_USER,
   DB_PWD: process.env.DB_PWD,
   DB_TEST_HOST : process.env.DB_TEST_HOST,
   DB_TEST_PORT : process.env.DB_TEST_PORT,
   DB_TEST_NAME : process.env.DB_TEST_NAME,
   DB_TEST_USER: process.env.DB_TEST_USER,
   DB_TEST_PWD: process.env.DB_TEST_PWD
}