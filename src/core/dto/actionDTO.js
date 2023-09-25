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
    CommentaireIds,
    CoutSuppIds,
    DateFinSupp,
    SecurityIds
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
    this.CommentaireIds = CommentaireIds;
    this.CoutSuppIds = CoutSuppIds;
    this.DateFinSupp = DateFinSupp;
    this.SecurityIds = SecurityIds;
  }
}
  
module.exports = ActionDTO;
  