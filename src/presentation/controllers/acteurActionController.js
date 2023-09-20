const ActeurActionServiceImpl = require('../../services/acteurActionServiceImpl');
const ActeurActionDTO = require('../../core/dto/acteurActionDTO');
const ActeurActionRepository = require('../../repositories/acteurActionRepository');
const uuid = require('uuid');

const acteurActionRepository = new ActeurActionRepository();
const acteurActionService = new ActeurActionServiceImpl(acteurActionRepository);

const getAllActeurActions = async (req, res) => {
    try{
        const acteurAction = await acteurActionService.getAll();
        res.json(acteurAction);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createActeurAction = async (req, res) => {
    try{
        const acteurActionDTO = new ActeurActionDTO({
            UserId: req.body.UserId,
            ActionId: req.body.ActionId,
            RoleRasci: req.body.RoleRasci,
            Description: req.body.Description,
            TypeAction: req.body.TypeAction
        });

        const createdActeurAction = await acteurActionService.create(acteurActionDTO);
        res.status(201).json(createdActeurAction);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getActeurActionById = async (req, res) => {
    try {
        const id = req.params.id;
        const acteurAction = await acteurActionService.getById(id)
        if (!acteurAction) {
            res.status(404).json({ message: 'ActeurAction not found'});
        } else {
            res.json(acteurAction);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateActeurAction = async (req, res) => {
    try {
        const id = req.params.id;
        const acteurActionDTO = new ActeurActionDTO({
            UserId: req.body.UserId,
            ActionId: req.body.ActionId,
            RoleRasci: req.body.RoleRasci,
            Description: req.body.Description,
            TypeAction: req.body.TypeAction
    });

        const updatedActeurAction = await acteurActionService.update(id, acteurActionDTO);
        res.json(updatedActeurAction);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteActeurAction = async (req, res) => {
    try {
        const id = req.params.id;
        await acteurActionService.delete(id);
        res.json({ message: 'ActeurAction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllActeurActions,
    createActeurAction,
    getActeurActionById,
    updateActeurAction,
    deleteActeurAction
}