const ActionService = require('./interfaces/actionService');
const Action = require('../core/entities/action');

class ActionServiceImpl extends ActionService {
  constructor(actionRepository) {
    super();
    this.actionRepository = actionRepository;
  }

  async getAll() {
    return this.actionRepository.getAll();
  }

  async getAllPaginated(pageNumber, pageSize) {
    return this.actionRepository.getAllPaginated(pageNumber, pageSize);
  }

  async getTotalCount() {
    return Action.countDocuments();
  }

  async create(actionDTO) {
    return this.actionRepository.create(actionDTO);
  }

  async getById(id) {
    return this.actionRepository.getById(id);
  }

  async update(id, actionDTO) {
    return this.actionRepository.update(id, actionDTO);
  }

  async delete(id) {
    return this.actionRepository.delete(id);
  }

}

module.exports = ActionServiceImpl;
