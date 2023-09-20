const User = require('../core/entities/user');

class UserRepository {
  async create(userDTO) {
    const newUser = new User(userDTO);
    return newUser.save();
  }

  async getById(id) {
    return User.findById(id);
  }

  async update(id, userDTO) {
    return User.findByIdAndUpdate(id, userDTO, { new: true });
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }

  async getAll() {
    return User.find();
  }

}

module.exports = UserRepository;
