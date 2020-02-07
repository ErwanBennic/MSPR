class LoginDto {
   constructor(loginRequest) {
      this.email = loginRequest.email;
      this.password = loginRequest.password;
   }
}

module.exports = LoginDto;