const bcrypt = require('bcrypt');
const logger = require('../helper/logger');
const saltRounds = 10;


exports.isSyntaxValid = (loginRequest) => {
   return loginRequest.email && loginRequest.password;
},

exports.bcryptHash = (password) => {
   return bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
         logger.green('Hash', hash);
         return hash;
      });
   });
}

exports.bcryptCompare = async (password, dbPassword) => {
   try {
      const res = await bcrypt.compare(password, dbPassword);
      return res;
   } catch (error) {
      logger.red("error", error)
   }

}