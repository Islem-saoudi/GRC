const CommentaireService = require('./interfaces/commentaireService');

class CommentaireServiceImpl extends CommentaireService {
  constructor(commentaireRepository) {
    super();
    this.commentaireRepository = commentaireRepository;
  }

  async getAll() {
    return this.commentaireRepository.getAll();
  }

  async create(commentaireDTO) {
    return this.commentaireRepository.create(commentaireDTO);
  }

  async getById(id) {
    return this.commentaireRepository.getById(id);
  }

  async update(id, commentaireDTO) {
    return this.commentaireRepository.update(id, commentaireDTO);
  }

  async delete(id) {
    return this.commentaireRepository.delete(id);
  }

}

module.exports = CommentaireServiceImpl;
