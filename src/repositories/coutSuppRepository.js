const CoutSupp = require('../core/entities/coutSupp');

class CoutSuppRepository {

    async getAll() {
        return CoutSupp.find();
    }

    async create(CoutSuppDTO) {
        const newCoutSupp = new CoutSupp(CoutSuppDTO);
        return newCoutSupp.save();
    }

    async getById(id) {
        return CoutSupp.findById(id);
    }

    async update(id, CoutSuppDTO) {
        return CoutSupp.findByIdAndUpdate(id, CoutSuppDTO, {new: true });
    }

    async delete(id) {
        return CoutSupp.findByIdAndDelete(id);
    }

}

module.exports = CoutSuppRepository;