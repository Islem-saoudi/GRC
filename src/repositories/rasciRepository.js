const Rasci = require('../core/entities/rasci');

class RasciRepository {
  async create(rasciDTO) {
    const newRasci = new Rasci(rasciDTO);
    return newRasci.save();
  }

  async getById(id) {
    return Rasci.findById(id);
  }

  async update(id, rasciDTO) {
    return Rasci.findByIdAndUpdate(id, rasciDTO, { new: true });
  }

  async delete(id) {
    return Rasci.findByIdAndDelete(id);
  }

  async getAll() {
    return Rasci.find();
  }

}

module.exports = RasciRepository;
