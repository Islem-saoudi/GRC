class UserDTO {
    constructor({ UserId, Name, LastName, Email, LastConnexion }) {
      this.UserId = UserId;
      this.Name = Name;
      this.LastName = LastName;
      this.Email = Email;
      this.LastConnexion = LastConnexion;
    }
}
  
module.exports = UserDTO;
  