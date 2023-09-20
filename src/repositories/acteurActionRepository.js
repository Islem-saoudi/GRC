const ActeurAction = require('../core/entities/acteurAction');

class ActeurActionRepository {

  async create(acteurActionDTO) {
    const newActeurAction = new ActeurAction(acteurActionDTO);
    return newActeurAction.save();
  }

  async getById(id) {
    return ActeurAction.findById(id);
  }

  async update(id, acteurActionDTO) {
    return ActeurAction.findByIdAndUpdate(id, acteurActionDTO, { new: true });
  }

  async delete(id) {
    return ActeurAction.findByIdAndDelete(id);
  }

  async getAll() {
    return ActeurAction.find();
  }

}

module.exports = ActeurActionRepository;
