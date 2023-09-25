const UserServiceImpl = require('../../services/userServiceImpl');
const UserDTO = require('../../core/dto/userDTO');
const UserRepository = require('../../repositories/userRepository');
const uuid = require('uuid');

const userRepository = new UserRepository();
const userService = new UserServiceImpl(userRepository);

const getAllUsers = async (req, res) => {
    try{
        const user = await userService.getAll();
        res.json(user);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    try{
        const userDTO = new UserDTO(
            uuid.v4(),
            req.body.Name,
            req.body.LastName,
            req.body.Email,
            req.body.LastConnexion
        );

        const createdUser = await userService.create(userDTO);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService.getById(id)
        if (!user) {
            res.status(404).json({ message: 'User not found'});
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userDTO = new UserDTO(
            req.body.UserId,
            req.body.Name,
            req.body.LastName,
            req.body.Email,
            req.body.LastConnexion
        );

        const updatedUser = await userService.update(id, userDTO);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userService.delete(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}