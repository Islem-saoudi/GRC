const SecurityCheckFamily = require('../core/entities/securityCheckFamily');

class SecurityCheckFamilyRepository {

    async getAll() {
        return SecurityCheckFamily.find();
    }

    async create(SecurityCheckFamilyDTO) {
        const newSecurityCheckFamily = new SecurityCheckFamily(SecurityCheckFamilyDTO);
        return newSecurityCheckFamily.save();
    }

    async getById(id) {
        return SecurityCheckFamily.findById(id);
    }

    async update(id, SecurityCheckFamilyDTO) {
        return SecurityCheckFamily.findByIdAndUpdate(id, SecurityCheckFamilyDTO, {new: true });
    }

    async delete(id) {
        return SecurityCheckFamily.findByIdAndDelete(id);
    }

}

module.exports = SecurityCheckFamilyRepository;
