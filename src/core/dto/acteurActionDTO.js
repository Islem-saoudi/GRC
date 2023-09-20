class ActeurActionDTO {
    constructor({ UserId, ActionId, RoleRasci, Description, TypeAction }) {
      this.UserId = UserId;
      this.ActionId = ActionId;
      this.RoleRasci = RoleRasci;
      this.Description = Description;
      this.TypeAction = TypeAction;
    }
}
  
module.exports = ActeurActionDTO;
  