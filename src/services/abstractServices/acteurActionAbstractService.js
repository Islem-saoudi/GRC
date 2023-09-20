const ActeurActionService = require('../interfaces/acteurActionService');

class ActeurActionAbstractService extends ActeurActionService {
  constructor() {
    super();
  }

  async create(acteurActionDTO) {
    throw new Error('Method not implemented');
  }

  async getAll() {
    throw new Error('Method not implemented');
  }

  async getAllPaginated(pageNumber, pageSize) {
    throw new Error('Method not implemented');
  }

  async getById(id) {
    throw new Error('Method not implemented');
  }

  async update(id, acteurActionDTO) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = ActeurActionAbstractService;
