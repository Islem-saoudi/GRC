const SecurityCheckFamilyService = require('./interfaces/securityCheckFamilyService');
//const SecurityCheckFamily = require('../core/entities/securityCheckFamily');

class SecurityCheckFamilyServiceImpl extends SecurityCheckFamilyService {
  constructor(securityCheckFamilyRepository) {
    super();
    this.securityCheckFamilyRepository = securityCheckFamilyRepository;
  }

  async getAll() {
    return this.securityCheckFamilyRepository.getAll();
  }

  async create(securityCheckFamilyDTO) {
    return this.securityCheckFamilyRepository.create(securityCheckFamilyDTO);
  }

  async getById(id) {
    return this.securityCheckFamilyRepository.getById(id);
  }

  async update(id, securityCheckFamilyDTO) {
    return this.securityCheckFamilyRepository.update(id, securityCheckFamilyDTO);
  }

  async delete(id) {
    return this.securityCheckFamilyRepository.delete(id);
  }

}

module.exports = SecurityCheckFamilyServiceImpl;
