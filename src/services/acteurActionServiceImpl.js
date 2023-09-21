const ActeurActionService = require('./interfaces/acteurActionService');
//const ActeurAction = require('../core/entities/acteurAction');

class ActeurActionServiceImpl extends ActeurActionService {
  constructor(acteurActionRepository) {
    super();
    this.acteurActionRepository = acteurActionRepository;
  }

  async getAll() {
    return this.acteurActionRepository.getAll();
  }

  async create(acteurActionDTO) {
    return this.acteurActionRepository.create(acteurActionDTO);
  }

  async getById(id) {
    return this.acteurActionRepository.getById(id);
  }

  async update(id, acteurActionDTO) {
    return this.acteurActionRepository.update(id, acteurActionDTO);
  }

  async delete(id) {
    return this.acteurActionRepository.delete(id);
  }

}

module.exports = ActeurActionServiceImpl;
