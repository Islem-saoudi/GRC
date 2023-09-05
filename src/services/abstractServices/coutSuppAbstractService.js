const CoutSuppService = require('../interfaces/coutSuppService');

class CoutSuppAbstractService extends CoutSuppService {
    constructor() {
        super();
    }

    async getAll() {
        throw new Error('Method not implemented')
    }

    async create(coutSuppDTO) {
        throw new Error('Method not implemented')
    }

    async getById(id) {
        throw new Error('Method not implemented')
    }

    async update(id, coutSuppDTO) {
        throw new Error('Method not implemented')
    }

    async delete(id) {
        throw new Error('Method not implemented')
    }
}

module.exports = CoutSuppAbstractService;