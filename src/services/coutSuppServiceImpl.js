const CoutSuppService = require('./interfaces/coutSuppService');

class CoutSuppServiceImpl extends CoutSuppService {
    constructor(coutSuppRepository) {
        super();
        this.coutSuppRepository = coutSuppRepository;
    }

    async getAll() {
        return this.coutSuppRepository.getAll()
    }

    async create(coutSuppDTO) {
        return this.coutSuppRepository.create(coutSuppDTO);
    }

    async getById(id) {
        return this.coutSuppRepository.getById(id);
    }

    async update(id, coutSuppDTO) {
        return this.coutSuppRepository.update(id, coutSuppDTO);
    }

    async delete(id) {
        return this.coutSuppRepository.delete(id);
    }
}

module.exports = CoutSuppServiceImpl;