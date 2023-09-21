const SecurityCheckFamilyService = require('../interfaces/securityCheckFamilyService');

class SecurityCheckFamilyAbstractService extends SecurityCheckFamilyService {
    constructor() {
        super();
    }

    async getAll() {
        throw new Error('Method not implemented')
    }

    async create(securityCheckFamilyDTO) {
        throw new Error('Method not implemented')
    }

    async getById(id) {
        throw new Error('Method not implemented')
    }

    async update(id, securityCheckFamilyDTO) {
        throw new Error('Method not implemented')
    }

    async delete(id) {
        throw new Error('Method not implemented')
    }
}

module.exports = SecurityCheckFamilyAbstractService;

