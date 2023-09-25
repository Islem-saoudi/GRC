class CoutSupplementaireDTO {
    constructor({ CoutSuppId, Montant, DateHeure, Etat }) {
      this.CoutSuppId = CoutSuppId;
      this.Montant = Montant;
      this.DateHeure = DateHeure;
      this.Etat = Etat;
    }
}
  
module.exports = CoutSupplementaireDTO;
  