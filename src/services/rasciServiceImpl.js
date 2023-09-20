const RasciService = require('./interfaces/rasciService');
const Rasci = require('../core/entities/rasci');

class RasciServiceImpl extends RasciService {
  constructor(rasciRepository) {
    super();
    this.rasciRepository = rasciRepository;
  }

  async getAll() {
    return this.rasciRepository.getAll();
  }

  async create(rasciDTO) {
    return this.rasciRepository.create(rasciDTO);
  }

  async getById(id) {
    return this.rasciRepository.getById(id);
  }

  async update(id, rasciDTO) {
    return this.rasciRepository.update(id, rasciDTO);
  }

  async delete(id) {
    return this.rasciRepository.delete(id);
  }

}

module.exports = RasciServiceImpl;
