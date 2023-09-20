const UserService = require('../interfaces/userService');

class UserAbstractService extends UserService {
  constructor() {
    super();
  }

  async create(userDTO) {
    throw new Error('Method not implemented');
  }

  async getAll() {
    throw new Error('Method not implemented');
  }

  async getById(id) {
    throw new Error('Method not implemented');
  }

  async update(id, userDTO) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = UserAbstractServuser