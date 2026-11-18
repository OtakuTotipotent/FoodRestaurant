// User Data Transfer Object
class UserDTO {
  constructor(user) {
    this._id = user._id;
    this.email = user.email;
    this.username = user.username;
    this.fullname = user.fullname;
    this.role = user.role;
  }
}

module.exports = UserDTO;
