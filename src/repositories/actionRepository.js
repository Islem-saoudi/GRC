const Action = require('../core/entities/action');

class ActionRepository {
  async create(actionDTO) {
    const newAction = new Action(actionDTO);
    return newAction.save();
  }

  async getById(id) {
    return Action.findById(id)
    .populate('CommentaireIds') 
    .populate('CoutSuppIds') 
    .populate('SecurityIds') 
    .exec();
  }

  async update(id, actionDTO) {
    return Action.findByIdAndUpdate(id, actionDTO, { new: true });
  }

  async delete(id) {
    return Action.findByIdAndDelete(id);
  }

  async getAll() {
    return Action.find();
  }

  async getAllPaginated(pageNumber, pageSize) {
    const skipAmount = (pageNumber - 1) * pageSize;
    return Action.find().skip(skipAmount).limit(pageSize);
  }

}

module.exports = ActionRepository;
