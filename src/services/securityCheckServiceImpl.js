const SecurityCheckService = require('./interfaces/securityCheckService');

class SecurityCheckServiceImpl extends SecurityCheckService {
    constructor(securityCheckRepository) {
        super();
        this.securityCheckRepository = securityCheckRepository;
    }

    async getAll() {
        return this.securityCheckRepository.getAll()
    }

    async create(securityCheckDTO) {
        return this.securityCheckRepository.create(securityCheckDTO);
    }

    async getById(id) {
        return this.securityCheckRepository.getById(id);
    }

    async update(id, securityCheckDTO) {
        return this.securityCheckRepository.update(id, securityCheckDTO);
    }

    async delete(id) {
        return this.securityCheckRepository.delete(id);
    }
}

module.exports = SecurityCheckServiceImpl;

