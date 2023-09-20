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
    CommentaireId,
    CoutSuppId,
    DateFinSupp,
    SecurityId
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
    this.CommentaireId = CommentaireId;
    this.CoutSuppId = CoutSuppId;
    this.DateFinSupp = DateFinSupp;
    this.SecurityId = SecurityId;
  }
}
  
module.exports = ActionDTO;
  