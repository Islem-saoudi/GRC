const ActionService = require('../interfaces/actionService');

class ActionAbstractService extends ActionService {
  constructor() {
    super();
  }

  async create(actionDTO) {
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

  async update(id, actionDTO) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = ActionAbstractService;
