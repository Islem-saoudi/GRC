const UserService = require('./interfaces/userService');
const User = require('../core/entities/user');

class UserServiceImpl extends UserService {
  constructor(userRepository) {
    super();
    this.userRepository = userRepository;
  }

  async getAll() {
    return this.userRepository.getAll();
  }

  async create(userDTO) {
    return this.userRepository.create(userDTO);
  }

  async getById(id) {
    return this.userRepository.getById(id);
  }

  async update(id, userDTO) {
    return this.userRepository.update(id, userDTO);
  }

  async delete(id) {
    return this.userRepository.delete(id);
  }

}

module.exports = UserServiceImpl;
