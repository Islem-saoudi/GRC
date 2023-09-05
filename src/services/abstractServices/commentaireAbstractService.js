const CommentaireService = require('../interfaces/commentaireService');

class CommentaireAbstractService extends CommentaireService {
    constructor() {
        super();
    }

    async getAll() {
      throw new Error('Method not implemented')
    }

    async create(commentaireDTO) {
        throw new Error('Method not implemented')
    }

    async getById(id) {
        throw new Error('Method not implemented');
    }
    
    async update(id, commentaireDTO) {
      throw new Error('Method not implemented');
    }
  
    async delete(id) {
      throw new Error('Method not implemented');
    }
}

module.exports = CommentaireAbstractService;