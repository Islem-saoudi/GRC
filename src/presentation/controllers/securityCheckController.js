const SecurityCheckServiceImpl = require('../../services/securityCheckServiceImpl');
const SecurityCheckDTO = require('../../core/dto/securityCheckDTO');
const SecurityCheckRepository = require('../../repositories/securityCheckRepository');
const uuid = require('uuid');

const securityCheckRepository = new SecurityCheckRepository();
const securityCheckService = new SecurityCheckServiceImpl(securityCheckRepository);

const getAllSecurityCheck = async (req, res) => {
    try{
        const securityCheck = await securityCheckService.getAll();
        res.json(securityCheck);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createSecurityCheck = async (req, res) => {
    try{
        const securityCheckDTO = new SecurityCheckDTO(
            uuid.v4(),
            req.body.Description,
            req.body.Labbel,
            req.body.Source
        );

        const createdSecurityCheck = await securityCheckService.create(securityCheckDTO);
        res.status(201).json(createdSecurityCheck);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getSecurityCheckById = async (req, res) => {
    try {
        const id = req.params.id;
        const securityCheck = await securityCheckService.getById(id)
        if (!securityCheck) {
            res.status(404).json({ message: 'Security Check Family not found'});
        } else {
            res.json(securityCheck);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateSecurityCheck = async (req, res) => {
    try {
        const id = req.params.id;
        const securityCheckDTO = new SecurityCheckDTO(
            req.body.SecurityId,
            req.body.Description,
            req.body.Labbel,
            req.body.Source
        );

        const updatedCoupSupp = await securityCheckService.update(id, securityCheckDTO);
        res.json(updatedCoupSupp);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteSecurityCheck = async (req, res) => {
    try {
        const id = req.params.id;
        await securityCheckService.delete(id);
        res.json({ message: 'Security Check Family deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllSecurityCheck,
    createSecurityCheck,
    getSecurityCheckById,
    updateSecurityCheck,
    deleteSecurityCheck
}

