const RasciServiceImpl = require('../../services/rasciServiceImpl');
const RasciDTO = require('../../core/dto/rasciDTO');
const RasciRepository = require('../../repositories/rasciRepository');
const uuid = require('uuid');

const rasciRepository = new RasciRepository();
const rasciService = new RasciServiceImpl(rasciRepository);

const getAllRascis = async (req, res) => {
    try{
        const rasci = await rasciService.getAll();
        res.json(rasci);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createRasci = async (req, res) => {
    try{
        const rasciDTO = new RasciDTO(
            uuid.v4(),
            req.body.Description,
            req.body.Symbole
        );

        const createdRasci = await rasciService.create(rasciDTO);
        res.status(201).json(createdRasci);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getRasciById = async (req, res) => {
    try {
        const id = req.params.id;
        const rasci = await rasciService.getById(id)
        if (!rasci) {
            res.status(404).json({ message: 'Rasci not found'});
        } else {
            res.json(rasci);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateRasci = async (req, res) => {
    try {
        const id = req.params.id;
        const rasciDTO = new RasciDTO(
            req.body.RoleRasci,
            req.body.Description,
            req.body.Symbole
        );

        const updatedRasci = await rasciService.update(id, rasciDTO);
        res.json(updatedRasci);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteRasci = async (req, res) => {
    try {
        const id = req.params.id;
        await rasciService.delete(id);
        res.json({ message: 'Rasci deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllRascis,
    createRasci,
    getRasciById,
    updateRasci,
    deleteRasci
}