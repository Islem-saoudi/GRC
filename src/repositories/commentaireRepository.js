const Commentaire = require('../core/entities/commentaire');

class CommentaireRepository {
  async create(commentaireDTO) {
    const newCommentaire = new Commentaire(commentaireDTO);
    return newCommentaire.save();
  }

  async getById(id) {
    return Commentaire.findById(id);
  }  
  async update(id, commentaireDTO) {
    return Commentaire.findByIdAndUpdate(id, commentaireDTO, { new: true });
  }

  async delete(id) {
    return Commentaire.findByIdAndDelete(id);
  }

  async getAll() {
    return Commentaire.find();
  }

}

module.exports = CommentaireRepository;
