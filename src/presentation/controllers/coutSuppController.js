const CoutSuppServiceImpl = require('../../services/coutSuppServiceImpl');
const CoutSuppDTO = require('../../core/dto/coutSuppDTO');
const CoutSuppRepository = require('../../repositories/coutSuppRepository');
const uuid = require('uuid');

const coutSuppRepository = new CoutSuppRepository();
const coutSuppService = new CoutSuppServiceImpl(coutSuppRepository);

const getAllCoutSupp = async (req, res) => {
    try{
        const coutSupp = await coutSuppService.getAll();
        res.json(coutSupp);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createCoutSupp = async (req, res) => {
    try{
        const coutSuppDTO = new CoutSuppDTO({
            CoutSuppId: uuid.v4(),
            Montant: req.body.Montant,
            DateHeure: req.body.DateHeure
       });

        const createdCoutSupp = await coutSuppService.create(coutSuppDTO);
        res.status(201).json(createdCoutSupp);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getCoutSuppById = async (req, res) => {
    try {
        const id = req.params.id;
        const coutSupp = await coutSuppService.getById(id)
        if (!coutSupp) {
            res.status(404).json({ message: 'Cout supplementaire not found'});
        } else {
            res.json(coutSupp);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateCoutSupp = async (req, res) => {
    try {
        const id = req.params.id;
        const coutSuppDTO = new CoutSuppDTO({
            CoutSuppId: req.body.CoutSuppId,
            Montant: req.body.Montant,
            DateHeure: req.body.DateHeure
       });

        const updatedCoutSupp = await coutSuppService.update(id, coutSuppDTO);
        res.json(updatedCoutSupp);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteCoutSupp = async (req, res) => {
    try {
        const id = req.params.id;
        await coutSuppService.delete(id);
        res.json({ message: 'Cout supplementaire deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllCoutSupp,
    createCoutSupp,
    getCoutSuppById,
    updateCoutSupp,
    deleteCoutSupp
}