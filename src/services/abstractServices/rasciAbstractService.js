const RasciService = require('../interfaces/rasciService');

class RasciAbstractService extends RasciService {
  constructor() {
    super();
  }

  async create(rasciDTO) {
    throw new Error('Method not implemented');
  }

  async getAll() {
    throw new Error('Method not implemented');
  }

  async getById(id) {
    throw new Error('Method not implemented');
  }

  async update(id, rasciDTO) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = RasciAbstractService;
