const SecurityCheck = require('../core/entities/securityCheck');

class SecurityCheckRepository {

    async getAll() {
        return SecurityCheck.find();
    }

    async create(SecurityCheckDTO) {
        const newSecurityCheck = new SecurityCheck(SecurityCheckDTO);
        return newSecurityCheck.save();
    }

    async getById(id) {
        return SecurityCheck.findById(id);
    }

    async update(id, SecurityCheckDTO) {
        return SecurityCheck.findByIdAndUpdate(id, SecurityCheckDTO, {new: true });
    }

    async delete(id) {
        return SecurityCheck.findByIdAndDelete(id);
    }

}

module.exports = SecurityCheckRepository;
