class ActionDTO {
  constructor({
    ActionId,
    Description,
    TypeAction,
    DateDebut,
    DateFin,
    Priorite,
    Cout,
    Source,
    Status,
    CommentaireId,
    CoutSuppId,
    DateFinSupp,
    SecurityId,
  }) {
    this.ActionId = ActionId;
    this.Description = Description;
    this.TypeAction = TypeAction;
    this.DateDebut = DateDebut;
    this.DateFin = DateFin;
    this.Priorite = Priorite;
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
