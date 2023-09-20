class CommentaireDTO {
  constructor(
      CommentaireId, Commentaire, DateHeure, UserId
  )
  {
      this.CommentaireId = CommentaireId;
      this.Commentaire = Commentaire;
      this.DateHeure = DateHeure;
      this.UserId = UserId;
  }
}

module.exports = CommentaireDTO;