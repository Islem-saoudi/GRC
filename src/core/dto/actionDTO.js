class ActionDTO {
  constructor(
    ActionId,
    NameAction,
    Description,
    TypeAction,
    DateDebut,
    DateFin,
    Priority,
    Cout,
    Source,
    Status,
    Commentairs,
    Couts,
    DateFinSupp,
    Securitys
  ) 
  {
    this.ActionId = ActionId;
    this.NameAction = NameAction;
    this.Description = Description;
    this.TypeAction = TypeAction;
    this.DateDebut = DateDebut;
    this.DateFin = DateFin;
    this.Priority = Priority;
    this.Cout = Cout;
    this.Source = Source;
    this.Status = Status;
    this.Commentairs = Commentairs;
    this.Couts = Couts;
    this.DateFinSupp = DateFinSupp;
    this.Securitys = Securitys;
  }
}
  
module.exports = ActionDTO;
  