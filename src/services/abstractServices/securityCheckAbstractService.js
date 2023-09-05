const SecurityCheckService = require('../interfaces/securityCheckService');

class SecurityCheckAbstractService extends SecurityCheckService {
    constructor() {
        super();
    }

    async getAll() {
        throw new Error('Method not implemented')
    }

    async create(securityCheckDTO) {
        throw new Error('Method not implemented')
    }

    async getById(id) {
        throw new Error('Method not implemented')
    }

    async update(id, securityCheckDTO) {
        throw new Error('Method not implemented')
    }

    async delete(id) {
        throw new Error('Method not implemented')
    }
}

module.exports = SecurityCheckAbstractService;

