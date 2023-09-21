const SecurityCheckFamilyServiceImpl = require('../../services/securityCheckFamilyServiceImpl');
const SecurityCheckFamilyDTO = require('../../core/dto/securityCheckFamilyDTO');
const SecurityCheckFamilyRepository = require('../../repositories/securityCheckFamilyRepository');
const uuid = require('uuid');

const securityCheckFamilyRepository = new SecurityCheckFamilyRepository();
const securityCheckFamilyService = new SecurityCheckFamilyServiceImpl(securityCheckFamilyRepository);

const getAllSecurityCheckFamily = async (req, res) => {
    try{
        const securityCheckFamily = await securityCheckFamilyService.getAll();
        res.json(securityCheckFamily);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const createSecurityCheckFamily = async (req, res) => {
    try{
        const securityCheckFamilyDTO = new SecurityCheckFamilyDTO({
            SecurityId: uuid.v4(),
            Description: req.body.Description,
            Labbel: req.body.Labbel,
            Source: req.body.Source
        });

        const createdSecurityCheckFamily = await securityCheckFamilyService.create(securityCheckFamilyDTO);
        res.status(201).json(createdSecurityCheckFamily);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const getSecurityCheckFamilyById = async (req, res) => {
    try {
        const id = req.params.id;
        const securityCheckFamily = await securityCheckFamilyService.getById(id)
        if (!securityCheckFamily) {
            res.status(404).json({ message: 'Security Check Family not found'});
        } else {
            res.json(securityCheckFamily);
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const updateSecurityCheckFamily = async (req, res) => {
    try {
        const id = req.params.id;
        const securityCheckFamilyDTO = new SecurityCheckFamilyDTO({
            SecurityId: req.body.SecurityId,
            Description: req.body.Description,
            Labbel: req.body.Labbel,
            Source: req.body.Source
        });

        const updatedCoupSupp = await securityCheckFamilyService.update(id, securityCheckFamilyDTO);
        res.json(updatedCoupSupp);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

const deleteSecurityCheckFamily = async (req, res) => {
    try {
        const id = req.params.id;
        await securityCheckFamilyService.delete(id);
        res.json({ message: 'Security Check Family deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getAllSecurityCheckFamily,
    createSecurityCheckFamily,
    getSecurityCheckFamilyById,
    updateSecurityCheckFamily,
    deleteSecurityCheckFamily
}

